import logo from './logo.svg';
import { ChakraProvider, VStack, Spacer, Grid, Button, HStack } from "@chakra-ui/react";
import theme from "./theme";
import "@fontsource/inter/700.css";
import "@fontsource/inter/400.css";
import ProfilePage from './pages/ProfilePage';
import PostPage from './pages/PostPage';
import Header from './components/Header';
import Footer from './components/Footer';
import Feed from './pages/Feed';
import { useState } from 'react';

function App() {

  const [ userConnected, setUserConnected ] = useState(true);

  return (
    <ChakraProvider theme={theme}>
      <Grid height="100vh" width="100vw" templateColumns={["1fr", "1fr 1fr 1fr", "1fr 1fr 1fr", "1fr 1fr 1fr"]}>
        <VStack justifyContent="space-between" spacing={0}>
          <Header />
          {
            userConnected ?
            <ProfilePage />
            :
            <HStack width="100%" height="100%" justifyContent="center">
              <Button>Connect Wallet</Button>            
            </HStack>
          }
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
