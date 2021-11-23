import React from "react";
import SocialContainer from "./socialMedia/SocialContainer.component";

function SignUpForm(props) {
    return (
        <form action="#">
            <h1>Create Account</h1>
            <SocialContainer />
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
        </form>)
}

export default SignUpForm;