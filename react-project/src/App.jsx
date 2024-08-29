import React, { useState } from 'react';
import './App.css';
import Card from "./Card";
import { FaSquareInstagram, FaSquareWhatsapp, FaSquareFacebook } from "react-icons/fa6";
import CryptoPrices from './CryptoPrices';

export default function App() {
  const [nome, setNome] = useState("");
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [content, setContent] = useState("home");  
  const [content2, setContent2] = useState("");

  const handleChange = (event) => {
    setNome(event.target.value);
  };

  const handleUsuarioChange = (event) => {
    setUsuario(event.target.value);
  };

  const handleSenhaChange = (event) => {
    setSenha(event.target.value);
  };

  const handleLogin = (event) =>{
    event.preventDefault();
    setContent2("");

    if(usuario === "admin" && senha === "admin"){
      setContent("loggedIn");
      
    }else{
      setContent2("Username or Password Error");
    }
  };

  const handleContentChange = (newContent) => {
    if (newContent === "login") {
      setSenha("");
      setUsuario("");
    }
    setContent(newContent);
  };

  const renderContent = () => {
    if (content === "home") {
      return (
        <>
          <div className='text-content'>
            <input className='input' type="text" value={nome} onChange={handleChange} />
            <h2>Olá, seja bem vindo {nome}!</h2> 
          </div>

          <div className='content'>
            <Card />
            <Card />
            <Card />
          </div>
        </>
      );
    } else if (content === "login") {
      return (
        <div className="text-content login">
          <h5>Nome</h5>
          <input className='input' type="text" value={usuario} onChange={handleUsuarioChange} />
          <h5>Senha</h5>
          <input className='input' type="password" value={senha} onChange={handleSenhaChange} />
          <p className='p-error'>{content2}</p>
          <button onClick={handleLogin}>Login</button>
        </div>
      );
    } else if (content === "loggedIn") {
      return (
        <div className="text-content">
          <h2>Logado</h2>
        </div>
      );
    } else if (content === "crypto") {
      return (
        <div className="text-content">
          <CryptoPrices 
            url="https://rest.coinapi.io/v1/exchangerate/BTC/USD" 
            title = "Bitcoin"
            image = "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
            />
          <CryptoPrices 
            url="https://rest.coinapi.io/v1/exchangerate/ETH/USD"
            title = "Ethereum"
            image = "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
            />          
          <CryptoPrices             
            url="https://rest.coinapi.io/v1/exchangerate/BNB/USD" 
            title = "BNB"
            image = "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png"
            />
          <CryptoPrices             
            url="https://rest.coinapi.io/v1/exchangerate/NEAR/USD" 
            title = "Near"
            image = "https://s2.coinmarketcap.com/static/img/coins/64x64/6535.png"
            />
        </div>
      );
    }
  };

  return (
    <div className='container'>   
      <nav className='sidebar'>
        <img
          className="card-image"
          src="https://via.placeholder.com/180x180"
          alt="Place Holder"
        />
        <a href="#home" onClick={() => handleContentChange("home")}>Inicio</a>
        <a href="#login" onClick={() => handleContentChange("crypto")}>Crypto</a> 
        <a href="#login" onClick={() => handleContentChange("login")}>Login</a> 
      </nav>

      <main className='main'>
        {renderContent()}
      </main>

      <footer className='footer'>
        <div className='icon-container'>
          <FaSquareInstagram />
          <FaSquareWhatsapp />
          <FaSquareFacebook />
        </div>
        <p>©2023 Copyright: placeholder</p>
      </footer>
    </div>
  );
}
