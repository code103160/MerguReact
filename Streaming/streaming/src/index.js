import React from 'react';
import { createRoot } from 'react-dom/client';

import Rotas from "./Rotas";

const main = document.getElementById("root")
const apresentado = createRoot(main)

apresentado.render( <Rotas/> )
