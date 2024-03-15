import { CartContextProvider } from "./context/cartContext";
import Major from "./components/app/Major";
import Header from "./components/app/Header";
import Footer from "./components/app/Footer";

function App() {
  return (
    <CartContextProvider>
      <Header />
      <Major />
      <Footer />
    </CartContextProvider>
  );
}

export default App;
