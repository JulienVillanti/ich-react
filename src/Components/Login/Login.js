import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import './Login.css';



function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [user, loading, error] = useAuthState(auth); Need to add that with firebase
    const navigate = useNavigate();

    // const onSubmit = (e) => {
    //     e.preventDefault();
    // }
    return (
        <div className="login">
            <div className="login__container">
                <h1 className="login__title">Login</h1>
                <input
                    type="email"
                    className="login__textbox"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                />
                <input
                    type="password"
                    className="login__textbox"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password address"
                    required
                />
                <button
                    className="login__btn"
                // onClick={() => signInWithEmailAndPassword(email, password)} -- Need FIREBASE TOO
                >
                    Login
                </button>
                {/* <button className="login__btn google__login" onClick={signInWithGoogle}>
                    Login with Google
                </button> */}
                <div><Link to="/reset">Forgot Password</Link>
                </div>
                <div>
                    Don't have an account? <Link to="/Sign-up">Sign-up</Link> now.
                </div>
            </div>



        </div>


    );

}
export default Login;