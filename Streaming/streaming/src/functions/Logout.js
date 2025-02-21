import axios from "axios";

export default function Logout(mail, toke) {
    return axios({
        method: "DELETE",
        url: "http://200.100.0.4:80/api/v1/session/destroy",
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