import logo from './logo.svg';
import { ChakraProvider, VStack, Spacer } from "@chakra-ui/react";
import theme from "./theme";
import "@fontsource/inter/700.css";
import "@fontsource/inter/400.css";
import ProfilePage from './pages/ProfilePage';
import PostPage from './pages/PostPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <VStack spacing={0} height="100vh">
        <Header />
        {/* <ProfilePage /> */}
        <PostPage />
        <Spacer />
        <Footer />
      </VStack>
      
    </ChakraProvider>
  );
}

export default App;
