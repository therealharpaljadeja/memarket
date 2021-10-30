import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
import PostPage from "./pages/PostPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useContext } from "react";
import CustomModal from "./components/CustomModal";
import { Web3Context, Web3ContextProvider } from "./context/Web3Context";
import OnboardingModal from "./components/OnboardingModal";
import Feed from "./pages/Feed";

function App() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const web3Context = useContext(Web3Context);
    const { connectWallet, chainId, requestNetworkChange, account, checkingUserRegistered, userRegistered } = web3Context;

    return (
        <Router>
            <ChakraProvider theme={theme}>
                <CustomModal modalButtonOnClick={requestNetworkChange} isOpen={chainId != "0x6f" && chainId != null} onClose={onClose} modalHeader="Invalid Network" modalCloseButton={false} modalFooterButtonText="Change Network">
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
                            alignItems="flex-start"
                            justifyContent="center"
                        >
                            {
                                account != undefined ?
                                // isCheckingUser == true ?
                                    // <Spinner />
                                    // :
                                    userRegistered != null ?
                                        userRegistered == true ?
                                            <Switch>
                                                <Route exact path="/">
                                                    <ProfilePage />
                                                </Route>
                                                <Route exact path="/nft/:creator/:address/:id">
                                                    <PostPage />
                                                </Route>
                                                <Route exact path="/feed">
                                                    <Feed />
                                                </Route>
                                            </Switch>
                                            :
                                            <OnboardingModal accountAddress={account} isOpen={userRegistered == false} onClose={onClose} />
                                        :
                                        null
                                :
                                <>
                                    <Button alignSelf="center" isLoading={checkingUserRegistered} onClick={connectWallet}>
                                        Connect Wallet
                                    </Button>
                                </>
                            }
                        </HStack>
                        <Spacer />
                        <Footer />
                    </VStack>
                </Grid>
            </ChakraProvider>
        </Router>
    );
}

export default App;
