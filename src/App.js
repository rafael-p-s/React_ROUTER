import "./App.css";

// 1 - CONFIGURAR O REACT ROUTER
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pages:
import { Home } from "./pages/Home.js";
import { About } from "./pages/About.js";

// Components
import { Navbar } from "./components/Navbar.js";



function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      {/* Elementros fora do ROUTES , /\, serão repetidos em todas as páginas, mas tudo dentro irá ser novo. */}
      <BrowserRouter>
        {/* 2 - LINKS REACT ROUTER */}
        {/* Por se repetir mas tendo elementos do REACT-ROUTER é necessário colocar dentro do BrowserRouter */}
        <Navbar />
        <Routes>
          {/* Esse "Route" irá exibir no caso o conteudo dentro do arquivo Home.js */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
