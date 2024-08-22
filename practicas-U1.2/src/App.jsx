/* import './App.css' */
import Beers from "./components/ejercicio1 beers/Beers"
import { beers } from "./data/data"

function App() {
  return (
    <>
      <Beers beers={beers}/>
    </>
  )
}

export default App
