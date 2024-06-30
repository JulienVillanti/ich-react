import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import './Login.css';


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    // const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log('User Logged', userCredential);
            // setUser(userCredential.user.email);
            navigate('/', { state: { email: userCredential.user.email } });
        } catch (error) {
            console.error('Error creating user', error);
            setError(error.message);
        }
    };

    return (
        <div className="login">
            <div className="login__container">
                <h1 className="login__title">Login</h1>
                <form>
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
                </form>
                <div>
                    Don't have an account? <Link to="/signup">Sign-up</Link> now.
                </div>
            </div>
        </div>


    );

}
export default Login;