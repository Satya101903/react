import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login'
import { BrowserRouter as Router , Routes , Route  } from 'react-router-dom';
import Signup from './Components/Signup';
import Notfound from './Components/Notfound'
import Dashboard from './Components/Modules/Dashboard';
import Fragview from './Components/Data/Viewdata/Fragview';
import Skinview from './Components/Data/Viewdata/Skinview';
import Hairview from './Components/Data/Viewdata/Hairview';
import Skindet from './Components/Details/Skindet';
import Hairdet from './Components/Details/Hairdet';
import Fragdet from './Components/Details/Fragdet';
import { CartProvider } from './Cartcontex';

import Topbar from './Components/Topbar';
import CartPage from './Components/Cartpage';



function App() {
  return (
    <div> 
       <CartProvider>
       <Router>
        
        <Routes>
          <Route path='/react' element={<Login />} /> 
           <Route path='/signup' element={<Signup />} />
           <Route path='*' element={<Notfound />} />
           <Route path='/dashboard' element={<Dashboard />} />
           <Route path ='/fragances'element={<Fragview/>} />
           <Route path ='/fragances/:id'element={<Fragdet/>}/>
           <Route path ='/skincare'element={<Skinview/>} />
           <Route path ='/skincare/:id'element={<Skindet/>} />
           <Route path ='/haircare'element={<Hairview/>} />
           <Route path ='/haircare/:id'element={<Hairdet/>} />
           <Route path='/topbar' element={<Topbar />} />
           <Route path='/cartpage' element={<CartPage />} />
        </Routes>
      </Router>
      </CartProvider>
      
     </div>
  )
}

export default App