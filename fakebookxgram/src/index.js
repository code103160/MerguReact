import React from "react"
import { createRoot } from "react-dom/client"

import Rotas from "./Rotas"

const contentor = document.getElementbyId("root")
const origem = createRoot(contentor) 

origem.render(<Rotas/>)
