
import "./styles.css";
import NavBar from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Hola Coder!"/>
    </>
  )
}

export default App;
