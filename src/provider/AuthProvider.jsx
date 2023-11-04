import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, } from "firebase/auth";


const auth = getAuth(app)
const Googleprovider = new GoogleAuthProvider();

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setuser] = useState(null);
    const [loading, setLoading] = useState(true);



// register user.......

    const CreatUser = (email, password, name, photo) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password, name, photo);
    }

// register with google......

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, Googleprovider)

    }


// login user.....

    const LoginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

// logout user......


    const LogOut = () => {
        setLoading(true);
        return signOut(auth);
    }



// updateProfile user.......


    const handleupdateProfile = (name, photo) => {

        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }




    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, createUser => {
            setLoading(false);
            setuser(createUser);



        })
        return () => {
            unsubscribe();
        };

    }, [])


    const UserInfo = {
        user,
        loading,
        CreatUser,
        googleLogin,
        LoginUser,
        LogOut,
        handleupdateProfile

    }


    return (
        <AuthContext.Provider value={UserInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;