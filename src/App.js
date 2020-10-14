import React, { createContext, useState } from 'react';
import Header from '../src/Components/Header/Header'
import Home from '../src/Components/Home/Home'
import Login from '../src/Components/Login/Login'
import Admin from '../src/Components/Admin/Admin'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
} from "react-router-dom";
import Registration from './Components/Registration/Registration';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';


export const UserContext = createContext();

function App() {

      const [signedInUser, setSignedInUser]= useState({});

  return (
    <UserContext.Provider value={[signedInUser, setSignedInUser]}>

          <Router>
              <Header></Header>

              <Switch>
                    <Route path="/Home">
                      <Home></Home>
                    </Route>

                    <Route path="/Login">
                    <Login></Login>
                    </Route>

                    <Route path="/Admin">
                    <Admin></Admin>
                    </Route>

                  <PrivateRoute path="/Registration">
                    <Registration></Registration>
                    </PrivateRoute>

                    <Route exact path="/">
                      <Home></Home>
                    </Route>
              </Switch> 
            </Router>   
    </UserContext.Provider>
  );
}

export default App;
