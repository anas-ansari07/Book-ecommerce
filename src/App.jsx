import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return( 
    <Router>
    <div className="App">
       <Home/>
    </div> 
    <Routes>
       <Route path="/login" component={ Login } />
       <Route path="/register" component={ Register } />
       <Route path="/cart" component={ Cart } />
    </Routes> 
    </Router>
  
  )
};

export default App;