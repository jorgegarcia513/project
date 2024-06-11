import React from "react";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const Welcome= () => {
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    }

    return (
        <main className="welcome">
            <h2>Welcome</h2>
            <p>Sign in with Google to use</p>
            <button onClick={googleSignIn} className="sign-in">
                Sign In With Google
            </button>
        </main>
    )
}

export default Welcome;