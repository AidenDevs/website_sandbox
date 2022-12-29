import { Component } from 'react'

class ApiManager extends Component {

    fetch_login = (email, password) => {
        fetch("http://10.0.0.173:5000/users/login", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.status == "ok") {
                    window.localStorage.setItem("token", data.data);
                    window.location.href = "./UserProfile";
                }
                else if (data.status == "error") {
                    alert(data.err)
                }
            });
    };

}

export default ApiManager;