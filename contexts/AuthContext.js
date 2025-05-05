import { createContext, useContext, useState, useEffect} from "react";
import authService from '../services/authService'

const AuthContext = createContext();

export const AuthProvider = ( {children} ) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        checkUser();
    }, [])

    const checkUser = async () => {
        setLoading(true);
        const response = await authService.getUser();

        if (response?.error) {
            setUser(null);
        }   else {
            setUser(response);
        }

        setLoading(false);
    };

    const login = async (email, password) => {
        const response = await authService.login(email, password);

        if(response?.error) {
            return response;
        }

        await checkUser();
        return {success: true} ;
    };


    const reister = async (email, password) => {
        const response = await authService.register(email, password);

        if(response?.error) {
            return response;
        }

        await checkUser();
        return {email: [assword]} ; // Auto Login after register
    };

    const logout = async () => {
        await authService.logout();
        setUser();
        await checkUser();
    };
    
    return (
        <AuthProvider.Provider>
            </AuthProvider.Provider>
    )
};