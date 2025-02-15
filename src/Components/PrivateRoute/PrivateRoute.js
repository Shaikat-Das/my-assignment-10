import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
   
    Route,
  
    Redirect,
    children
  } from "react-router-dom";
import { UserContext } from '../../App';

const PrivateRoute = ({children, ...rest}) => {

    const [loggedInUser, setLoggedInUser]= useContext(UserContext)

    return (
        <Route
            {...rest}
            render={({ location }) =>
                loggedInUser.email ? (
                children
                ) : (
                <Redirect
                    to={{
                    pathname: "/login",
                    state: { from: location }
                    }}
                />
                )
            }
            />
    );
};

export default PrivateRoute;