import notifier from "node-notifier";
import mongoose from "mongoose";
import "dotenv/config";

const endereço = process.env.MONGOURI
MONGOURI = "mongodb+srv://LucacsCoutinho:LreO1tH5Cg2jf6SF@supfli.72dnfrf.mongodb.net/?retryWrites=true&w=majority&appName=Supfli"

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
