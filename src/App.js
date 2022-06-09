
import './App.css';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';
import Service from './Components/Service/Service';
import Contact from './Components/Contact/Contact';
import Guide from './Components/Guide/Guide';
import AuthProvider from './Context/AuthProvider';
import ServiceDetails from './Components/ServiceDetails/ServiceDetails';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Error from './Components/NotFound.js/Error';







function App() {


  return (
    <div>

     <AuthProvider>
      
      <BrowserRouter>
       <Header></Header>
    
        <Routes>
    
        <Route  path="/" element={<Home></Home>} ></Route>
        <Route  path="/home" element={<Home></Home>} ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/Registration" element={<Register></Register>}></Route>
        <Route path="/Service" element={<Service></Service>}></Route>
        <Route path="/Contact" element={<PrivateRoute><Contact/></PrivateRoute>}></Route>
        <Route path="/Guide" element={<PrivateRoute><Guide/></PrivateRoute> }></Route>
        <Route path='/servicedetails' element={<PrivateRoute><ServiceDetails/></PrivateRoute> }/>
        <Route  path="*" element={<Error/>} ></Route>


    </Routes>
    
    </BrowserRouter>
    
  
      
      </AuthProvider>

  
     
    </div>
  );
}

export default App;
