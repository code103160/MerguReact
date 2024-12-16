import axios from "axios";

export default function Usuario(email, senha) {
    return axios({
        method: "POST",
        url: "http://localhost:4000/api/v1/session/create",
        params: {
            "user":{
                "email": email,
                "password": senha
            }
        }
    })
}