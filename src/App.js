import Home from "./Pages/Home";
import About from "./Pages/About"
import Menu from "./Pages/Menu"
import Contact from "./Pages/Contact"
import { Route, Routes } from "react-router-dom";
import "./App.css"
import ScrollToTop from "./hooks/ScrollToTop";

function App() {
  return (
    <div className="App">
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
