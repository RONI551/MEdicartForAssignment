
import React, { useState } from 'react';
import './login.css'
import LogoutIcon from '@mui/icons-material/Logout';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import InitializeAuthentication from '../../Firebase/Firebase-initialize';
import { Link, useNavigate } from 'react-router-dom';
import UseAuth from '../../Hook/UseAuth';

InitializeAuthentication()

const Login = () => {
    const {signInusingGoogle,handleFacebookSignIn,handleGithhubSignIn, user,logOut,UserLogin}= UseAuth()

    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
    const [error, setError]= useState('')
    const Navigate = useNavigate()



    const handleLogin = async (e)=>{
        e.preventDefault()
        try{
                 await UserLogin(email,password)
                 Navigate('/home')
             
        } catch(e){
            setError (e.message)
            console.log(e.message ,'from sign in')

        }

    }

 

    return (
        
        <div class="containerr">
        <div class="screen">
      
        
            <div class="screen__content">
            { user?.displayName &&
                //optional chaining start
                <div className='login'>
                <div className='userImage'><img className='Imagess'  src={user.photoURL} alt="" /></div>
                <h3 className='userImage'>{user.displayName}</h3>
                <span className='userImage' ><EmailIcon/>{user.email} </span>

                <button class="button login__submit" onClick={logOut}>
                <span class="button__text " style={{display:'flex',	justifyContent: "center",
                alignItems: "center"}}><LogoutIcon/> log out</span>
                <i class="button__icon fas fa-chevron-right"></i>
            </button>
            </div>
            }
            { user?.email &&
                //optional chaining start
                <div className='login'>
                <div className='userImage'><img className='Imagess'  src='https://www.lightsong.net/wp-content/uploads/2020/12/blank-profile-circle-300x300.png' alt="" /></div>
              
                <span className='userImage' ><EmailIcon/>{user.email} </span>

                <button class="button login__submit" onClick={logOut}>
                <span class="button__text " style={{display:'flex',	justifyContent: "center",
                alignItems: "center"}}><LogoutIcon/> log out</span>
                <i class="button__icon fas fa-chevron-right"></i>
            </button>
            </div>
          
            }
        
               { !user?.displayName &&  <div>

          
                <form class="login" onSubmit={handleLogin}>
                
                    <div class="login__field">
                        <i class="login__icon fas fa-user"></i>
                        <input onChange={(e)=>{setEmail(e.target.value)}} type="text" class="login__input" placeholder="User name / Email"/>
                    </div>
                    <div class="login__field">
                        <i class="login__icon fas fa-lock"></i>
                        <input onChange={(e)=>{setPassword(e.target.value)}} type="password" class="login__input" placeholder="Password"/>
                    </div>
                    <h2>{user.msz}</h2>
                    <h1 className=' text-left text-red-600 '>Don't have any Account yet? <br/> <Link to='/Registration' className='underline text-slate-900' >Sign-up</Link></h1>
                   
                 <button class="button login__submit">
                        <span class="button__text">Log In Now</span>
                        <i class="button__icon fas fa-chevron-right"></i>
                    </button>				
                    	<h5 style={{color:'red'}}>{error}</h5>			
                </form>
                <div class="social-login">
                  

                       
                      <div>
                        <h3>log in via</h3>
                        <div class="social-icons">
                        <Link to="/login" class="social-login__icon fab fa-instagram" onClick={handleGithhubSignIn} ><GitHubIcon/> </Link>
                        <Link to="/login" class="social-login__icon fab fa-facebook " onClick={handleFacebookSignIn} ><FacebookIcon/> </Link>
                        <Link to='/login' class="social-login__icon fab fa-twitter" onClick={signInusingGoogle}><GoogleIcon/> </Link>
                        
                    
                        </div>
                    </div>
                    
                    
                </div>
             
                
                </div>
                
                //optional chaining end
                
               }
              
            
            </div>
            <div class="screen__background">
                <span class="screen__background__shape screen__background__shape4"></span>
                <span class="screen__background__shape screen__background__shape3"></span>		
                <span class="screen__background__shape screen__background__shape2"></span>
                <span class="screen__background__shape screen__background__shape1"></span>
            </div>		
        </div>
    </div>
    );
};

export default  Login ;
