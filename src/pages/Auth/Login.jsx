import { useNavigate } from "react-router-dom";
import { auth, provider } from "../../firebase/firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useAuth } from "../../context/authContext";


function Login() {
    const { login } = useAuth();
    const nav = useNavigate();

    const handleLogin = () => {
        login();
        nav('/cms');
    };

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth", true);
            handleLogin()
        })
    }

    return (
        <div>
            <p>sign In with Google to connect</p>
            <button onClick={signInWithGoogle}>sign in with Google</button>
        </div>
    )

}

export default Login