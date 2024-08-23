import axios from "axios";

export default function Generos() {
    return axios({
        method: "GET",
        url: "http://localhost:4000/generos"
    })
}