import express from "express";
import cors from "cors";
import notifier from "node-notifier";
import morgan from "morgan";
import rotas from "./Rotas";

const servidor = express()

notifier.notify({
    title: "Superflix",
    message: "SERVIDOR EM FUNCIONAMENTO",
    icon: "./src/icone.png"
})

servidor.use(morgan("dev"))
servidor.use(rotas)
servidor.use(cors())
servidor.use(express.json())

servidor.listen(4000, () => {})