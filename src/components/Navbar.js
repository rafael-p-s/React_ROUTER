// 2 - LINKS REACT ROUTER
import "./Navbar.css";

import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav>
      <Link to="/">Home - Link</Link>
      {/* Esse cara de cima /\ é semelhante com esse\/ */}
      {/* <a href="/">Home - a</a> */}
      {/* Porem o "Link" faz o direcionamento sem fazer o RELOAD DA PAGINA, trocando somento os componentes. */}
      <Link to="/about">About Me</Link>
    </nav>
  );
}
