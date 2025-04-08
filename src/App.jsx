// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import bannerImg from "./assets/banner.png";
import indioImg from "./assets/indio.png";
import peixe1 from "./assets/peixe1.png";
import peixe2 from "./assets/peixe2.png";
import peixe3 from "./assets/peixe3.png";
import peixe4 from "./assets/peixe4.png";
import Vendas from "./pages/vendas";
import "./App.css";

function Home() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          <a href="#">Início</a>
          <a href="#">Sobre</a>
          <a href="#">Contato</a>
        </div>
        <div className="logo">ManoManauara</div>
        <div className="nav-right">
          <button className="btn">Entrar</button>
          <button className="btn">Cadastrar</button>
        </div>
      </nav>

      <div className="banner">
        <img src={bannerImg} alt="banner" className="banner-img" />
        <div className="indio">
          <img src={indioImg} alt="indio" />
        </div>
        <div className="boas-vindas">Bem-vindo ao mercado indígena!</div>
      </div>

      <div className="conteudo">
        <div className="secao">
          <h2>Catálogo de Peixes</h2>
          <Link to="/vendas">
            <img src={peixe1} alt="Catálogo de Peixes" style={{ cursor: "pointer" }} />
          </Link>
        </div>
        <div className="secao">
          <h2>Vender Peixe</h2>
          <img src={peixe2} alt="Venda de Peixe" />
        </div>
        <div className="secao">
          <h2>História da Cultura Pesqueira Indígena</h2>
          <img src={peixe3} alt="História da Cultura Pesqueira Indígena" />
        </div>
        <div className="secao">
          <h2>História da Cultura Pesqueira Indígena</h2>
          <img src={peixe4} alt="Práticas Sustentáveis" />
        </div>
      </div>

      <footer>
        &copy; 2025 ManoManauara - Todos os direitos reservados.
      </footer>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vendas" element={<Vendas />} />
      </Routes>
    </Router>
  );
}
