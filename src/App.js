
import "./styles.css";
import NavBar from "./components/NavBar";
import { BrowserRouter} from "react-router-dom";
import { AppRouter } from "./router/AppRouter";
import { CartProvider } from "./context/CartContext";

function App() {



  return (
    <>
      <CartProvider>
        <BrowserRouter>
         <NavBar/>
          <AppRouter/>
        </BrowserRouter>
        </CartProvider>
    </>
  )
}

export default App;
