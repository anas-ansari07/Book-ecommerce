import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from "./components/Main";


function App() {
  return( 
    <BrowserRouter>
    
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="home" exact element={<Home/>}/>
        <Route path="main" element={<Main/>}/>
      </Routes>
    </BrowserRouter>
    
  
  )
};

export default App;