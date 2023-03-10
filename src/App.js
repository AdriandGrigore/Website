import Home from "./Pages/Home";
import About from "./Pages/About"
import Services from "./Pages/Services"
import Contact from "./Pages/Contact"
import { Route, Routes } from "react-router-dom";
import "./App.css"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
