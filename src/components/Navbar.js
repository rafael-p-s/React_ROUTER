// 2 - LINKS REACT ROUTER
import "./Navbar.css";

import { Link, NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <nav>
      {/* <Link to="/">Home - Link</Link> */}
      {/* Esse cara de cima /\ é semelhante com esse\/ */}
      {/* <a href="/">Home - a</a> */}
      {/* Porem o "Link" faz o direcionamento sem fazer o RELOAD DA PAGINA, trocando somento os componentes. */}
      {/* <Link to="/about">About Me</Link> */}

      {/* 8 - Fendo o LINK ATIVO */}
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">Sobre</NavLink>

      {/* Mandeira antiga de se fazer: */}
      {/* <NavLink to="/"className={({isActive})=>(isActive ? "esta-ativo":"nao-ativo")}>Home</NavLink> */}
    </nav>
  );
}
