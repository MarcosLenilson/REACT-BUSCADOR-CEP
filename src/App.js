import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import "./style.css";
import api from "./services/api";

function App() {
  const [input, setInput] = useState("");
  const [cep, setCep] = useState({});

  async function handleSearch() {
    if (input === "") {
      alert("Preencha algum cep!");
      return;
    }REACT-ZIP-CODE-SEEKER

    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data);
      setInput("");
    } catch {
      alert("Ops! erro ao buscar aqui");
      setInput("");
    }
  }

  return (
    <div className="container">
      <h1 className="title">buscador CEP</h1>
      <h4 className="by">By Marcos Lenilson</h4>
      <div className="containerInput">
        <input
          type="text"
          placeholder="Digite seu cep..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#FFF" />
        </button>
      </div>

      <main className="main">
        <h2>CEP: {cep.cep}</h2>
        <span>{cep.logradouro} </span>
        <span>Complemento: {cep.complemento}</span>
        <span>{cep.bairro}</span>
        <span>
          {cep.localidade} - {cep.uf}
        </span>
      </main>
    </div>
  );
}

export default App;
