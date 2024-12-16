import axios from "axios";

export default function Generos(mail, token) {
    return axios({
        method: "GET",
        url: "http://200.100.0.14:80/api/v1/movies",
        params: {
            "data":{
                "user":{
                    "email":mail,
                    "access_token": token
                }
            }
        }
    })
}