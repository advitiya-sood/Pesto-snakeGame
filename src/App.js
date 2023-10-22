import { Route,  BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Auth/Login';
import Canvas from './Components/Canvas';
import Score from './Components/Score';
import Home from './Home';
import PrivateRoutes from './PrivateRoutes';
import SignUp from './Components/Auth/SignUp';



function App() {

  return (
  //   <>
  // <div style={{display:'flex', justifyContent:"space-around", marginTop:"50px", alignItems:"center"}} >
  //     <Canvas/>
  //     <Score/>
  // </div>
  // <Login/>
  //   </>



  <>
  <Router>
    <Routes>                               
      <Route  path='/' element={<Login/>}></Route> 
      <Route  path='/register' element={<SignUp/>}></Route> 

      <Route  element={<PrivateRoutes />}>          {/*  Protected routes implemented, can be used when actually conected to the apis */}
        <Route path='/home'  element={<Home/>}/>                               
      </Route>

    </Routes>
      
  </Router>
  </>
    
  );
}

export default App;
