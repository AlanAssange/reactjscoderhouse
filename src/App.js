
import "./styles.css";
import NavBar from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import Products from "./components/Products";
import { Hp } from "./components/Hp";

function App() {
  return (
    <>
      <NavBar/>
      <main>
      <Hp/>
      <ItemListContainer greeting="Hola Coder!"/>
      <Products stock="10"/>
      </main>
    </>
  )
}

export default App;
