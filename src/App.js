
import './App.css';
import { NavBar } from './Components/NavBar/NavBar';
import {Banner} from "./Components/Banner/Banner"
import {Skills } from "./Components/Skills"

import "bootstrap/dist/css/bootstrap.css"


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
    </div>
  );
}

export default App;
