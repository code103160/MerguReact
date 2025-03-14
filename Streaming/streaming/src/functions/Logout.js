import axios from "axios";

export default function Logout(mail, toke) {
    let dados = {
        'data' : {
            'user' : {
                'email':mail[0],
                'access_token':toke[0]
            }
        }
    }
    console.log(mail)
    console.log(toke)
    console.log(dados)
    return axios({
        method: "DELETE",
        url: "http://200.100.0.4:80/api/v1/session/destroy",
        params: dados
    })
}