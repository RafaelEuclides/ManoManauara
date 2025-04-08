import React from "react";
import "../styles/Vendas.css";
import tambaqui from "../assets/tambaqui.png";
import pacu from "../assets/pacu.png";

export default function Vendas() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-left">
          <a href="#">Home</a>
          <a href="#">Contato</a>
          <a href="#">Sobre</a>
        </div>
        <div className="logo">
          <span className="verde">Mano</span> <span>Manauara</span>
        </div>
        <div className="nav-right">
          <button className="btn cadastro">Cadastro</button>
          <button className="btn login">Login</button>
        </div>
      </nav>

      <div className="titulo">
        <p>Catálogo de peixes disponíveis para compra</p>
      </div>

      <div className="container">
        <div className="secao1">
          <h2>Tambaqui</h2>
          <img src={tambaqui} alt="Tambaqui" />
        </div>
        <div className="secao1">
          <h2>Pacu</h2>
          <img src={pacu} alt="Pacu" />
        </div>
      </div>

      <div className="paginacao">
        <button className="btn pag">&lt;</button>
        <button className="btn pag">1</button>
        <button className="btn pag">&gt;</button>
      </div>
    </>
  );
}