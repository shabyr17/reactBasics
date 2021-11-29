import React, { useState } from 'react';
import './login-form.style.css';

export default function LoginForm() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handleLoginSubmit = ()=>{
        console.log("here submit clicked", username, password)       
    }
    return (
         
        <div className="login">
            <div className="heading">
                <h2>Sign in</h2>
                <form action="#">
                    <div className="input-group input-group-lg">
                        <span className="input-group-addon"><i className="fa fa-user" /></span>
                        <input type="text" className="form-control" placeholder="Username or email" onChange={(e)=>setUsername(e.target.value)}/>
                    </div>
                    <div className="input-group input-group-lg">
                        <span className="input-group-addon"><i className="fa fa-lock" /></span>
                        <input type="password" className="form-control" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} />
                    </div>
                    <button type="submit" className="float" onClick={handleLoginSubmit}>Login</button>

                    <div className='forgot'>
                    <a href='./forgot-credentials'>Forgot Username/Password?</a>
                    </div>
                    <div className='forgot'>
                    <a href='./sign-up'>Sign Up</a>
                    </div>
                    
                </form>
            </div>
        </div>
    );
}