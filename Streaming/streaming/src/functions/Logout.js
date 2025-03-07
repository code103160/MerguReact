import axios from "axios";

export default function Logout(mail, toke) {
    console.log(mail, toke)
    return axios({
        method: "DELETE",
        url: "http://200.100.0.7:80/api/v1/session/destroy",
        params: {
            "data": {
                "user":{
                    "email": mail,
                    "access_token": toke
                }
            }
        }
    })
}