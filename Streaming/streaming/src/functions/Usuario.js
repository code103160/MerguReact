import axios from "axios";

export default function Usuario() {
    return axios({
        method: "POST",
        url: "http://200.100.0.19/api/v1/user/registration",
        params: {
            "user":{
                "email": "",
                "password": ""
            },
        }
    })
}