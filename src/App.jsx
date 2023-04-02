import {BrowserRouter,Route,Routes} from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { UserLogin
 } from './pages/UserLogin';
import { WorkerLogin } from './pages/WorkerLogin';
import { Contact } from './pages/Contact';
import { NavLink } from 'react-router-dom';
import { HeaderSection } from './shared/HeaderSection';




function App(){

 return (
 <BrowserRouter>
    
<HeaderSection/>
     

    
  


     <main>
      
  <Routes>


   <Route path='/'element={<HomePage/>} ></Route>

    <Route path='workerlogin' element={<WorkerLogin/>}/>
    <Route path='contact' element = {<Contact/>}/>
  </Routes>
     </main>
 
 
 </BrowserRouter>
 )


}


export   default App;