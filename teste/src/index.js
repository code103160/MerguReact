import React from "react";
import { createRoot } from "react-dom/client";
import Componente from "./Componente";

const contentor = document.getElementById("root");
const origem = createRoot(contentor);

origem.render(<h1>Olá</h1>);

const botao = <button>Clique.</button>;

const nome = "Vitor";
const titulo = <h1>O Nome do professor é {nome} </h1>;

origem.render(titulo);
origem.render(<Componente/>)

