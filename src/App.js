import logo from './logo.svg';
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import "@fontsource/inter/700.css";
import "@fontsource/inter/400.css";
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ProfilePage />
    </ChakraProvider>
  );
}

export default App;
