import React from "react";
import LoginForm from './form/LoginForm.component';

function LoginFormContainer(props) {
    return (
        <div className="form-container sign-in-container">
            <LoginForm/>
        </div>
    )
}

export default LoginFormContainer;