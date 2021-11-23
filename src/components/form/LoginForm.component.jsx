import React from "react";
import SocialContainer from "./socialMedia/SocialContainer.component";

function LoginForm(props) {
    return (
        <form action="#">
            <h1>Sign in</h1>
            <SocialContainer />
            <span>or use your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="/forgot-password">Forgot your password?</a>
            <button>Sign In</button>
        </form>)
}

export default LoginForm;