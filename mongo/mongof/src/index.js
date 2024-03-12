import React from 'react';
import { createRoot } from "react-dom/client"
import axios from 'axios';

import Inicio from './Components/inicio';

const contentor = document.getElementById("root")
const origem = createRoot(contentor)

origem.render(<Inicio/>)