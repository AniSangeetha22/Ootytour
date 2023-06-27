import { Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Heading  from "./pages/Heading";
import SignIn  from "./pages/SignIn";
import SignUp  from "./pages/SignUp";
import ForgotPassword  from "./pages/ForgotPassword";
import  PlacesToVisit  from "./pages/PlacesToVisit";

// import { Navigation } from "./pages/Navigation";



function App() {
  return (
    < >
   
      
       <Heading/>
        <Routes>
           <Route path = "/" element = {<Home/>}/>
          <Route path = "/places-to-visit" element = {<PlacesToVisit/>}/>
          <Route path = "/sign-in" element = {<SignIn/>}/>
          <Route path = "/sign-up" element = {<SignUp/>}/>
          <Route path = "/forgot-password" element = {<ForgotPassword/>}/>
          </Routes>
      
      
    </>
  )
}
export default App;