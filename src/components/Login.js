import React, {Fragment} from "react";

const Login = (props) => {


    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={ login}>
                <input placeholder="username"/>
                <input placeholder="password"/>
                <button>Login</button>
            </form>
        </div>
    )
}
export default Login; 