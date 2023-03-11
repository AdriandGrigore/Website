import Home from "./Pages/Home";
import Menu from "./Pages/Menu"
import Contact from "./Pages/Contact"
import { Route, Routes } from "react-router-dom";
import "./App.css"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
