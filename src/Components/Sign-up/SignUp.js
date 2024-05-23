import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './SignUp.css';

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    // const [user, loading, error] = useAuthState(auth); Need to add that with firebase
    // const history = useHistory();

    return (
        <div className="signup">
            <div className="signup__container">
                <h1 className="signup__title">Sign-Up</h1>
                <input
                    type="text"
                    className="signup__textbox"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name"
                    required
                />

                <input
                    type="email"
                    className="signup__textbox"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your Email address"
                    required
                />

                <input
                    type="password"
                    className="signup__textbox"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                />
                <button className="signup__btn" onClick={SignUp}>Sign-Up</button>
                {/* <button className="signup__btn google__signup" onClick={signInWithGoogle}>
                Sign-Up with Google</button>*/}

                <div>
                    Already have an account? <Link to="/login">Login</Link>
                </div>
            </div>
        </div>
    );

}
export default SignUp;  