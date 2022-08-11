import React, { ReactElement, useReducer } from "react";
import server from "../api/server";
import jwt_decode from 'jwt-decode';

interface TokenUser {
    profile: string;
    user: string;
}

interface Action {
    type: string;
    payload: any;
}

const defaultValue = { token: null, user: null, profile: null };
const AuthContext = React.createContext(defaultValue);


const Provider = ({ children }: { children: ReactElement }) => {
    const reducer = (state: any, action: Action) => {
        switch (action.type) {
            case 'login':
                return {
                    ...state, ...action.payload,
                }
            default:
                return {
                    ...state
                }
        }
    }

    const [state, dispatch] = useReducer(reducer, defaultValue);
    const login = (dispatch: any) => {
        return async ({ user, password }: { user: string, password: string }) => {
            try {
                const response = await server.post('/security/login', {
                    user,
                    password
                });
                const { accessToken } = response.data;
                const { profile, user: userName } = jwt_decode(accessToken) as TokenUser;
                dispatch({ type: 'login', payload: { token: accessToken, profile, userName } })
            } catch (err) {
                console.log(err);
            }
        }
    }

    return (
        //@ts-ignore
        <AuthContext.Provider value={{state, login: login(dispatch)}} >
            {children}
        </AuthContext.Provider>
    )
};

export { Provider, AuthContext };
