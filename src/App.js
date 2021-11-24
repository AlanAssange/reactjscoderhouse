
import "./styles.css";
import NavBar from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { CartView } from "./components/CartView";

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
      <Routes>
          <Route path="/" element={ <ItemListContainer/>}/>
          <Route path="/category" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<CartView/>}/>
          <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
