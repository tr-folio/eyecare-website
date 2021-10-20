import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isSignedUp, setIsSignedUp] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const signUpUsingEmailAndPassword = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            updateProfile(auth.currentUser, {displayName: name})
            .then(result => {});
            const user = result.user;
            setUser(user);
            setIsSignedUp(true);
            console.log(user);
            logout();
        })
        .catch(error => {
            console.log(error.message);
        })
        return isSignedUp;
    }

    const signInUsingEmailAndPassword = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            console.log('from login', user);
            setUser(user);
            setIsLoggedIn(true);
        })
        .catch(error => {
            console.log(error.message);
        })
        return isLoggedIn;
    }

    const logout = () => {
        signOut(auth)
        .then(() => {
            setUser({});
        })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
        })
    }, []);

    return {
        user,
        error,
        signInUsingGoogle,
        signUpUsingEmailAndPassword,
        signInUsingEmailAndPassword,
        logout
    };
}

export default useFirebase;