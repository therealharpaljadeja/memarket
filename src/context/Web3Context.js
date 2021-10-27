import React, { useEffect, useState } from "react";
import { isUserRegistered } from "../utils/Creator";


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
            setProvider(window.ethereum);
        }
    }, []);

    useEffect(() => {
        if(provider) {
            setChainId(provider.chainId);

            provider.on("chainChanged", (chainId) => {
                setChainId(chainId);
            });

            provider.on("accountsChanged", (accounts) => {
                setAccount(accounts[0]);
            })
        }
    }, [provider])

    useEffect(() => {
        (async () => {
            let result = await checkUserRegistered(provider);
            setUserRegistered(result);
        })();
    }, [account]);

    async function connectWallet() {
        const accounts = await provider.request({ method: "eth_requestAccounts" });
        setAccount(accounts[0]);
    }

    async function requestNetworkChange() {
        provider.request({ 
            method: "wallet_addEthereumChain",
            params: [validNetworkOptions]
        })
    }

    async function checkUserRegistered() {
        let result = await isUserRegistered(provider);
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
                userRegistered
            }}
        >
            {children}
        </Web3Context.Provider>
    )
}