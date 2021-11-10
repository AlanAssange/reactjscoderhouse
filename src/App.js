
import "./styles.css";
import NavBar from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import Products from "./components/Products";

function App() {
  return (
    <>
      <NavBar/>
      <main>
      <ItemListContainer greeting="Hola Coder!"/>
      <Products stock="10"/>
      </main>
    </>
  )
}

export default App;
