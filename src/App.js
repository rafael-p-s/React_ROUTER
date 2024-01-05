import "./App.css";

// 1 - CONFIGURAR O REACT ROUTER
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";

// Components
import { Navbar } from "./components/Navbar.js";
import { SearchForm } from "./components/SearchForm.js";

// Pages:
import { Home } from "./pages/Home.js";
import { About } from "./pages/About.js";
import { Product } from "./pages/Product.js";
import { Info } from "./pages/Info.js";
import { NotFound } from "./pages/NotFound.js";
import { Search } from "./pages/Search.js";


function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      {/* Elementros fora do ROUTES , /\, serão repetidos em todas as páginas, mas tudo dentro irá ser novo. */}
      <BrowserRouter>
        {/* 2 - LINKS REACT ROUTER */}
        {/* Por se repetir mas tendo elementos do REACT-ROUTER é necessário colocar dentro do BrowserRouter */}
        <Navbar />
        {/* 9 - SEARCH/BUSCA */}
        <SearchForm/>
        <Routes>
          {/* Esse "Route" irá exibir no caso o conteudo dentro do arquivo Home.js */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* 4 - rota dinâmica */}
          <Route path="/products/:id" element={<Product />} />
          {/* 6 - nested route */}
          <Route path="/products/:id/info" element={<Info />} />
          {/* 9 - SEARCH */}
          <Route path="/search" element={<Search/>}/>
          {/* 10 - REDIRECT */}
          <Route path="/company" element={<Navigate to="/about"/>}/>
          {/* 7 - no match route 404 */}
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
