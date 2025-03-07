import axios from "axios";

export default function NewUser(email, senha) {
    return axios({
        method: "POST",
        url: "http://200.100.0.7:80/api/v1/user/registration",
        params: {
            "user":{
                "email": email,
                "password": senha
            }
        }
    })
}