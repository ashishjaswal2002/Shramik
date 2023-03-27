import {BrowserRouter,Route,Routes} from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Signin } from './pages/Signin';
import { SignupPage } from './pages/SignupPage';

function App(){

 return (
 <BrowserRouter>
 

     <main>
  <Routes>


    <Route index element={<HomePage/>}></Route>
    <Route path='signin' element={<Signin/>}/>
    <Route path='signup' element={<SignupPage/>}/> 
 
  </Routes>
     </main>
 
 
 </BrowserRouter>
 )


}


export   default App;