import React, { useEffect, useState } from "react";
import { isUserRegistered, getCreatorAddressBySender, getCreatorAddressByUsername, registerUser, getCreatorObjFromAddress } from "../utils/Creators";
import { providers } from "ethers";
import { approveToMarketplace, mintNFT, tokenMetadata, tokenOwnedByUser } from "../utils/NFT";
import { createMarketItem, createSale, fetchItemsCreated, fetchMarketItems, fetchMyNFTs } from "../utils/NFTMarket";
import { nativeTouchData } from "react-dom/test-utils";

const validNetworkOptions = {
    chainId: '0x6f',
    chainName: 'Velas Testnet',
    nativeCurrency: { name: "Velas", symbol: 'Velas', decimals: 18 },
    rpcUrls: ['https://evmexplorer.testnet.veladev.net/rpc'],
    blockExplorerUrls: ['https://explorer.testnet.velas.com/'],
    // iconUrls: ['future']
}

export const Web3Context = React.createContext(undefined);



export function Web3ContextProvider({ children }) {
    const [ provider, setProvider ] = useState(null);
    const [ isProviderLoading, setIsProviderLoading ] = useState(true);
    const [ chainId, setChainId ] = useState(null);
    const [ account, setAccount ] = useState(null);
    const [ userRegistered, setUserRegistered ] = useState(null);
    const [ creator, setCreator ] = useState({});
    const [ creatorAddress, setCreatorAddress ] = useState(null);
    const [ checkingUserRegistered, setCheckingUserRegistered ] = useState(false);
    const [ isMintingNFT, setIsMintingNFT ] = useState(false);
    const [ loadingNFT, setLoadingNFT ] = useState(false);
    const [ fetchingMarketItems, setFetchingMarketItems ] = useState(false);
    const [ fetchingItemsCreated, setFetchingItemsCreated ] = useState(false);
    const [ fetchingMyNFTs, setFetchingMyNFTs ] = useState(false);
    const [ creatingMarketSale, setCreatingMarketSale ] = useState(false);
    const [ currentUserNFTs, setCurrentUserNFTs ] = useState(null);
    const [ currentUserNFTOnMarketplace, setCurrentUserNFTOnMarketplace ] = useState(null);
    const [ marketItems, setMarketItems ] = useState(null);
    const [ gettingMetadata, setGettingMetadata ] = useState(null);
    const [ approvingToMarketplace, setApprovingToMarketplace ] = useState(false);
    const [ creatingMarketItem, setCreatingMarketItem ] = useState(false);
    const [ currentUserNFTsBoughtOnMarketplace, setCurrentUserNFTsBoughtOnMarketplace ] = useState(null);

    useEffect(() => {
        if(window.ethereum) {
            setProvider(new providers.Web3Provider(window.ethereum));

            window.ethereum.on("chainChanged", (chainId) => {
                setChainId(chainId);
            });

            window.ethereum.on("accountsChanged", (accounts) => {
                console.log("Accounts Changed");
                setAccount(accounts[0]);
            })
        }
    }, []);

    
    useEffect(() => {
        if(provider != undefined && account != undefined) {
            setCheckingUserRegistered(true);
            const init = async () => {
                checkUserRegistered()
                .then(result => {
                    setUserRegistered(result);
                    setCheckingUserRegistered(true);
                })
            }
            init();
        }
    }, [account]);

    useEffect(() => {
        if(provider) {
            setChainId(provider.chainId);  
        }
    }, [provider])

    useEffect(() => {
        if(provider && userRegistered != false) {
            getCreatorAddressBySenderUsingSigner();
        }
    }, [userRegistered]);

    useEffect(() => {
        if(creatorAddress != null) {
            getCreatorObjUsingSigner();
        }
    },[creatorAddress])


    async function connectWallet() {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setAccount(accounts[0]);
    }

    async function getCreatorAddressBySenderUsingSigner() {
        getCreatorAddressBySender(provider)
        .then(result => {
            setCreatorAddress(result);
        })
    }

    async function getCreatorObjUsingSigner() {
        getCreatorObjFromAddress(provider, creatorAddress)
        .then(result => {
            setCreator(result);
        });
    }

    async function requestNetworkChange() {
        console.log("requesting network change");
        console.log(window.ethereum);
        window.ethereum.request({ 
            method: "wallet_addEthereumChain",
            params: [validNetworkOptions]
        })
    }

    async function checkUserRegistered() {
        let result = await isUserRegistered(provider);
        return result;
    }

    async function getCreatorAddressFromUsername(username) {
        let result = await getCreatorAddressByUsername(provider, username);
        return result;
    }

    async function registerCreator(creator) {
        const result = await registerUser(provider, creator);
        if(result.hash != undefined) {
            setUserRegistered(true);
        }
    }

    async function mintNFTUsingSigner(tokenURI) {
        setIsMintingNFT(true);
        let result = await mintNFT(provider, creatorAddress, tokenURI);
        setIsMintingNFT(false);
    }

    async function getNFTsOwnerByUserUsingSigner() {
        setLoadingNFT(true);
        let result = await tokenOwnedByUser(provider, creatorAddress);
        setCurrentUserNFTs(result);
        setLoadingNFT(false);
    }

    async function fetchMarketItemsUsingSigner() {
        setFetchingMarketItems(true);
        let result = await fetchMarketItems(provider);
        console.log(result);
        setMarketItems(result);
        setFetchingMarketItems(false);
    }

    async function fetchItemsCreatedUsingSigner() {
        setFetchingItemsCreated(true);
        let result = await fetchItemsCreated(provider);
        setCurrentUserNFTOnMarketplace(result);
        setFetchingItemsCreated(false);
    }

    async function fetchMyNFTsUsingSigner() {
        setFetchingMyNFTs(true);
        let result = await fetchMyNFTs(provider);
        setCurrentUserNFTsBoughtOnMarketplace(result);
        setFetchingMyNFTs(false);
    }

    async function createMarketItemUsingSigner(collectionAddress, tokenId, price) {
        setCreatingMarketItem(true);
        await createMarketItem(provider, collectionAddress, tokenId, price);
        setCreatingMarketItem(false);
    }

    async function createSaleUsingSigner(collectionAddress, tokenId, price) {
        setCreatingMarketSale(true);
        await createSale(provider, collectionAddress, tokenId, price);
        setCreatingMarketSale(false);
    }

    async function nftMetadataUsingSigner(creatorAddress, collectionAddress, tokenId) {
        setGettingMetadata(true);
        let nft = await tokenMetadata(provider, creatorAddress, collectionAddress, tokenId);
        setGettingMetadata(false);
        return nft;
    }

    async function approveToMarketplaceUsingSigner(collectionAddress, tokenId) {
        setApprovingToMarketplace(true);
        await approveToMarketplace(provider, collectionAddress, tokenId);
        setApprovingToMarketplace(false);
    }

    return (
        <Web3Context.Provider 
            value={{ 
                isProviderLoading, 
                provider,
                chainId,
                account,
                userRegistered,
                creator,
                creatorAddress,
                isMintingNFT,
                fetchingMarketItems,
                fetchingItemsCreated,
                fetchingMyNFTs,
                creatingMarketSale,
                loadingNFT,
                currentUserNFTs,
                currentUserNFTOnMarketplace,
                marketItems,
                gettingMetadata,
                approvingToMarketplace,
                creatingMarketItem,
                currentUserNFTsBoughtOnMarketplace,
                fetchMarketItemsUsingSigner,
                fetchItemsCreatedUsingSigner,
                fetchMyNFTsUsingSigner,
                createSaleUsingSigner,
                getNFTsOwnerByUserUsingSigner,
                mintNFTUsingSigner,
                getCreatorAddressFromUsername,
                registerCreator,
                requestNetworkChange,
                connectWallet,
                checkUserRegistered,
                nftMetadataUsingSigner,
                approveToMarketplaceUsingSigner,
                createMarketItemUsingSigner
            }}
        >
            {children}
        </Web3Context.Provider>
    )
}