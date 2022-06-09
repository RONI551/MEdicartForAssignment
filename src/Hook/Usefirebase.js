import { FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { useEffect, useState } from "react"

import InitializeAuthentication from "../Firebase/Firebase-initialize"


InitializeAuthentication()
const useFirebase = ()=>{
    const [user, setUser]= useState({})
    const [error, setError]=useState(' ')

   const auth = getAuth()
   const googleProvider = new GoogleAuthProvider()
   const FacebookProvider = new FacebookAuthProvider()
   const Githubprovider = new GithubAuthProvider()
   const signInusingGoogle =()=>{
       signInWithPopup(auth,googleProvider)
       .then(result=>{
           setUser(result.user)
      
          

       })
       .catch(error=>{
           setError(error.message)
       })
   }
   
   const UserLogin =(email,password)=>{
    signInWithEmailAndPassword(auth,email,password).then(result=>{const {name:displayName, email,photoURL} =result.user; const logedInUser = {name:displayName, emaill:email, photo:photoURL};setUser(logedInUser);  console.log('login done');setError('Your are loged in')}).catch(error=>{setError(error.message)})

  
}

   const handleFacebookSignIn =()=>{
    signInWithPopup(auth,FacebookProvider).then(result=>{const {displayName,email,photoURL} = result.user; const fbuser={name: displayName, emaill: email, photo: photoURL } ; setUser(fbuser)

})
}

const handleGithhubSignIn =()=>{
    signInWithPopup (auth, Githubprovider)
    .then(result=>{const {displayName,email,photoURL}=result.user; const GithubUser ={name: displayName, photo: photoURL,emaill: email }; setUser(GithubUser)
        console.log(user)
    })
}

   const logOut =()=>{
       signOut(auth)
       .then(()=>{
           setUser({ })
       })
       .catch((error) => { })
   }

   useEffect(()=>{
       onAuthStateChanged(auth, user =>{
          if(user){
              
              setUser(user)
          } 
       })
   },[user])
   return {
       UserLogin,
       logOut,
       user,
       error,
       signInusingGoogle,
       handleFacebookSignIn,
       handleGithhubSignIn,
       
   }
}

export default useFirebase;