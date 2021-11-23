import React from "react";

function SignIn(props) {
    return (
        <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button className="ghost" id="signIn" onClick = {props.handleCLickSignIn}>Sign In</button>
        </div>
    )
}

export default SignIn;