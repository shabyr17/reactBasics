import React from "react";

function SignUp(props) {    
    return (
        <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button className="ghost" id="signUp" onClick = {props.handleCLickSignUp}>Sign Up</button>
        </div>)
}

export default SignUp;
