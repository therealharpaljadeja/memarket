import logo from './logo.svg';
import { ChakraProvider, VStack, Spacer, Grid } from "@chakra-ui/react";
import theme from "./theme";
import "@fontsource/inter/700.css";
import "@fontsource/inter/400.css";
import ProfilePage from './pages/ProfilePage';
import PostPage from './pages/PostPage';
import Header from './components/Header';
import Footer from './components/Footer';
import Feed from './pages/Feed';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Grid height="max(100vh, 100%)"width="100vw" templateColumns={["1fr", "1fr 1fr 1fr", "1fr 1fr 1fr", "1fr 1fr 1fr"]}>
        <VStack spacing={0}>
          <Header />
          <ProfilePage />
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
