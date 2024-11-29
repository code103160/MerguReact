import axios from "axios";

export default function Generos() {
    return axios({
        method: "GET",
        url: "http://200.100.0.14/api/v1/movies",
        params: {
            "data":{
                "user":{
                    "email":"lucacoutinho@mail.com",
                    "access_token": "30db489481ffadbc4d731729887173"
                },
            }
        }
    })
}