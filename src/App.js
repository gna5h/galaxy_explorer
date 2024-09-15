import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/Home/Home.tsx";
import theme from "./theme.js";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Home />
    </ChakraProvider>
  );
}

export default App;
