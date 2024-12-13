import axios from "axios";

export default function Usuario(email, senha) {
    return axios({
        method: "POST",
        url: "http://200.100.0.10/api/v1/session/create",
        params: {
            "user":{
                "email": email,
                "password": senha
            }
        }
    })
}