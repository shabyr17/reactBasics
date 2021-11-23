import React from "react";
import SignUpForm from './form/SignUpForm.component';
import SignIn from "./box/SignIn.component";
import SignUp from "./box/SignUp.component";

function SignUpContainer(props) {
    console.log("props", props)
    return (<>
        <div className="overlay-container">
            <div className="overlay">
                <SignIn handleCLickSignIn = {props.handleCLickSignIn} />
                <SignUp handleCLickSignUp = {props.handleCLickSignUp} />
            </div>
        </div>
        <div className="form-container sign-up-container">
            <SignUpForm />
        </div>
    </>

    )
}

export default SignUpContainer;