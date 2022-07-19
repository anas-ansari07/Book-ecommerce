
import Home from "./pages/Home";

import Register from "./pages/Register";
import Login from "./pages/Login";

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return( 
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
    
  
  )
};

export default App;