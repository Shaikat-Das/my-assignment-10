import React, { useContext, useState } from 'react';
import './Login.css'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import '../../App.css'
import {
    BrowserRouter as Router,
    Link,
    useRouteMatch
  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserContext } from '../../App';




firebase.initializeApp(firebaseConfig);

const Login = () => {

    const [user, setUser] = useState({
            isSignedIn: false,
            name: '',
            email: ''      
    })

    const [signedInUser, setSignedInUser] = useContext(UserContext)

    const provider = new firebase.auth.GoogleAuthProvider();
    const handleSignIn = () =>{
        
        firebase.auth().signInWithPopup(provider)
        .then(function(result) {
            const {displayName, email} = result.user;
            const signedInUser ={
                isSignedIn: true,
                name: displayName, 
                email: email        
                
            }

         setUser(signedInUser);
         setSignedInUser(signedInUser);

            console.log(displayName, email);
           
           
          })

          .catch(function(error) {
            var errorMessage = error.message;
            console.log (error);
          });

    }

        const handleSignOut = () =>{
            firebase.auth().signOut()
            
            .then(function() {
                const signedOutUser = {
                    isSignedIn: false,
                    name: '',
                    email: ''
                }
                setUser(signedOutUser);
              })
              .catch(function(error) {
                // An error happened.
              });
        }
        
    return (
        <>     
                
        <div>
            {
                user.isSignedIn && 
                <div className="welcome-message">
                    <h2><strong>Welcome, {signedInUser.name}</strong> </h2>
                   <Link to ="/Registration"> <p><b>Please fill up the 
                       form to be a volunteer</b></p> </Link>

                </div>
            }
        </div>

            { user.isSignedIn ?  <button onClick={handleSignOut} style={{marginLeft:850}}
            className="btn btn-success" >Or You can Sign out to exit</button>:
                <div className="log-in">
                    <h3>Log In with</h3>
                    <button onClick={handleSignIn} className="btn btn-success" >Google Sign In</button>
                    <h4>Don't have an account?  <a href="https://www.gmail.com">Sign Up with Google</a></h4>
                </div>
         
        }
       
        </>
    );
};

export default Login;