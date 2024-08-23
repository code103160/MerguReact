import notifier from "node-notifier";
import mongoose from "mongoose";
import "dotenv/config";

const endereço = process.env.MONGOURI

const opção = { useNewUrlParser: true, useUnifiedTopology: true }

mongoose.connect(endereço, opção)
    .then(() => {
        notifier.notify({
            title: "Superflix",
            message: "SERVIDOR EM FUNCIONAMENTO",
            icon: "/"
        })
    })

    .catch((erro) => {console.log(erro.message)})
