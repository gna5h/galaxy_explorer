import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import Home from "./pages/Home/Home.tsx";
import theme from "./theme.js";
import store from "./store/store.ts";

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Home />
      </ChakraProvider>
    </Provider>
  );
}

export default App;
