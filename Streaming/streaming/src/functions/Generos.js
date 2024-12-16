import axios from "axios";

export default function Generos() {
    return axios({
        method: "GET",
        url: "http://localhost:4000/api/v1/movies",
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