
import { Navigate } from "react-router-dom";

import UseAuth from "../../Hook/UseAuth";

export default function PrivateRoute({children}) {
  const { user}= UseAuth();
  const UserName = user.displayName;
  const UserEmail = user.email;

  if(UserName){
    return children ;

  }
  else if(UserEmail){
    return children;
  }
  else if(!UserEmail){
    return <Navigate to='/login'></Navigate>;
  }
  else if(!UserName){
    return <Navigate to='/login'></Navigate>;
  }



 


  
   
}