import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"
import Tmp1 from "./pages/Temp1";
import AbList from "./pages/AbList";
import Navbar from './components/Navbar'
import Login from "./pages/Login";
import Mycanvas from "./pages/Mycanvas";
import {ThemeContextProvider} from "./context/ThemeContext"
import {AuthContextProvider} from "./context/AurhContext"

function App() {
  return (
    <>
     <Router>
    <ThemeContextProvider>
    <AuthContextProvider>
       <Navbar/>
         <Routes>
          <Route path="/" element={<Tmp1/>}/>
          <Route path="/ablist" element={<AbList/>}/> 
          <Route path="/login" element={<Login/>}/> 
          <Route path="/my-canvas" element={<Mycanvas/>}/> 

         </Routes>
    </AuthContextProvider>
   </ThemeContextProvider>
   </Router>

  </>
  );
}

export default App;
