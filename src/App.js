import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"
import Tmp1 from "./pages/Temp1";
import AbList from "./pages/AbList";
import Navbar from './components/Navbar'
function App() {
  return (
    <>
<Router>
 <Navbar/>
  <Routes>
    <Route path="/" element={<Tmp1/>}/>
    <Route path="/ablist" element={<AbList/>}/> 
  </Routes>
</Router>
    </>
  );
}

export default App;
