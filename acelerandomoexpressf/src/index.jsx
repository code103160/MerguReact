import React from 'react';
import { createRoot} from "react-dom/client"

import Inicio from './inicio';

const contentor = document.getElementById("root")
const origem = createRoot(contentor)

origem.render(<Inicio/>)