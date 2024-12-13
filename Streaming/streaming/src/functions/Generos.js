import axios from "axios";

export default function Generos() {
    return axios({
        method: "GET",
        url: "http://200.100.0.10/api/v1/movies",
        params: {
            "data":{
                "user":{
                    "email":"",
                    "access_token": ""
                }
            }
        }
    })
}