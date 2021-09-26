
import {auth, fbauth } from './index.js';

/* Action to be performed when user clicks "Sign Up" button */
document.getElementById("signup-btn").onclick = function(){
    let email = document.getElementById("user-email").value;
    let password = document.getElementById("user-password").value;

    fbauth.createUserWithEmailAndPassword(auth, email, password).catch(e=>{
        alert(e);
    })
};
  