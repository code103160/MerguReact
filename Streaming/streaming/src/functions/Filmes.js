import axios from "axios";

export default function Filmes() {
    return axios({
        method: "GET",
        url: "http://200.100.0.19/api/v1/movies",
        params: {
            "data": {
                "user":{
                    "email":"lucacoutinho@mail.com",
                    "access_token": "30db489481ffadbc4d731729887173"
                },
            }
        }
    })
}