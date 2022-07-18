
import Home from "./pages/Home";

import Register from "./pages/Register";
import Login from "./pages/Login";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return( 
    <Router>
    <div className="App">
       <Home/>
     
    <Routes>
       <Route path="/login" component={ <Login/> } />
       <Route path="/register" component={ Register } />
       
    </Routes>
    </div> 
    </Router>
  
  )
};

export default App;