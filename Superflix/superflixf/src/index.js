import React from 'react';
import { createRoot } from 'react-dom/client';

import Rotas from "./Rotas";

const contentor = document.getElementById("root")
const origem = createRoot(contentor)

origem.render( <Rotas/> )
