import {
    ChakraProvider,
    VStack,
    Spacer,
    Grid,
    Button,
    HStack,
    useDisclosure,
} from "@chakra-ui/react";
import theme from "./theme";
import "@fontsource/inter/700.css";
import "@fontsource/inter/400.css";
import ProfilePage from "./pages/ProfilePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useContext } from "react";
import CustomModal from "./components/CustomModal";
import { Web3Context, Web3ContextProvider } from "./context/Web3Context";
import OnboardingModal from "./components/OnboardingModal";

function App() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const web3Context = useContext(Web3Context);
    const { connectWallet, chainId, requestNetworkChange, account, userRegistered } = web3Context;

    return (
        <ChakraProvider theme={theme}>
            <CustomModal modalButtonOnClick={requestNetworkChange} isOpen={chainId != "0xaef3" && chainId != null} onClose={onClose} modalHeader="Invalid Network" modalCloseButton={false} modalFooterButtonText="Change Network">
            </CustomModal>
            <Grid
                height="100vh"
                width="100vw"
                templateColumns={[
                    "1fr",
                    "1fr 1fr 1fr",
                    "1fr 1fr 1fr",
                    "1fr 1fr 1fr",
                ]}
            >
                <VStack justifyContent="space-between" spacing={0}>
                    <Header />
                    <HStack
                        width="100%"
                        height="100%"
                        justifyContent="center"
                    >
                        {
                            account != undefined ?
                            // isCheckingUser == true ?
                                // <Spinner />
                                // :
                                userRegistered == true ?
                                    <ProfilePage />
                                    :
                                    <OnboardingModal accountAddress={account} isOpen={userRegistered == false} onClose={onClose} />
                            :
                            <>
                                <Button onClick={connectWallet}>
                                    Connect Wallet
                                </Button>
                            </>
                        }
                    </HStack>
                    {/* <PostPage /> */}
                    {/* <Feed /> */}
                    <Spacer />
                    <Footer />
                </VStack>
            </Grid>
        </ChakraProvider>
    );
}

export default App;
