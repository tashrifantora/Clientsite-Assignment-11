import { createContext } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebasse.config.js'
import { useState } from "react";
import { useEffect } from "react";
import PropTypes from 'prop-types';
import axios from "axios";


export const AuthContext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    /* Email Pass Authentication */

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    /* Register with Google */
    const googleRegister = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    // LogIn
    const SignIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // LogOut
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }



    // Manage User
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {

            const userEmail = currentUser?.email || user?.email;
            const loggedEmail = { email: userEmail }

            setUser(currentUser)
            console.log('Current user', currentUser)
            setLoading(false);

            // Token
            if (currentUser) {
                axios.post('https://endless-exploration-server.vercel.app/jwt', loggedEmail, { withCredentials: true })
                    .then(res => {
                        console.log('token', res.data)
                    })
            }
            else {
                axios.post('https://endless-exploration-server.vercel.app/logout', loggedEmail, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                    })
            }

        })
        return () => {
            return unsubscribe();
        }
    }, []);

    const contextValue = {
        user,
        loading,
        createUser,
        SignIn,
        googleRegister,
        logOut
    }

    return (
        <div>
            <AuthContext.Provider value={contextValue}>
                {children}
            </AuthContext.Provider>

        </div>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;