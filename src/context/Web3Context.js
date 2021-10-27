import React, { useEffect, useState } from "react";
import { isUserRegistered, getCreatorAddress, registerUser } from "../utils/Creators";
import { providers } from "ethers";

const validNetworkOptions = {
    chainId: '0xaef3',
    chainName: 'Alfajores Testnet',
    nativeCurrency: { name: "Alfajores Celo", symbol: 'A-CELO', decimals: 18 },
    rpcUrls: ['https://alfajores-forno.celo-testnet.org'],
    blockExplorerUrls: ['https://alfajores-blockscout.celo-testnet.org/'],
    iconUrls: ['future']
}

export const Web3Context = React.createContext(undefined);



export function Web3ContextProvider({ children }) {
    const [ signerAddress, setSignerAddress ] = useState(null);
    const [ provider, setProvider ] = useState(null);
    const [ isProviderLoading, setIsProviderLoading ] = useState(true);
    const [ chainId, setChainId ] = useState(null);
    const [ account, setAccount ] = useState(null);
    const [ userRegistered, setUserRegistered ] = useState(false);

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
        console.log(provider, account);
        if(provider != undefined && account != undefined) {
            const init = async () => {
                let result = await checkUserRegistered();
                console.log(result);
                setUserRegistered(result);
            }
            init();
        }
    }, [account]);

    useEffect(() => {
        if(provider) {
            setChainId(provider.chainId);  
        }
    }, [provider])


    async function connectWallet() {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setAccount(accounts[0]);
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
        console.log("Checking if user registered");
        let result = await isUserRegistered(provider);
        return result;
    }

    async function getCreatorAddressFromUsername(username) {
        let result = await getCreatorAddress(provider, username);
        return result;
    }

    async function registerCreator(creator) {
        const result = await registerUser(provider, creator);
        return result;
    }

    return (
        <Web3Context.Provider 
            value={{ 
                connectWallet,
                isProviderLoading, 
                provider,
                chainId,
                requestNetworkChange,
                account,
                userRegistered,
                getCreatorAddressFromUsername,
                checkUserRegistered,
                registerCreator
            }}
        >
            {children}
        </Web3Context.Provider>
    )
}