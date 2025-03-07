import axios from "axios";

export default function Filmes(mail, toke) {
    console.log(mail)
    console.log(toke)
    return axios({
        method: "GET",
        url: "http://200.100.0.7:80/api/v1/movies",
        params: {
            "data": {
                "user":{
                    "email": mail[0],
                    "access_token": toke[0]
                }
            }
        }
    })
}