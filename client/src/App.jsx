import {Route,Routes} from "react-router-dom";
import Indexpage from "./pages/Indexpage";
import LoginPage from "./pages/Loginpage";
import Registorpage from "./pages/Registorpage";
import { UserContextProvider } from "./usercontext";
import AccountPage from "./pages/Accountpage";
function App() {
  return (
    <UserContextProvider>
    <Routes>
      <Route path="/" element={<Indexpage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/registor" element={<Registorpage/>}></Route>
      <Route path="/account/:subpage?" element={<AccountPage/>}></Route>
    </Routes>
    </UserContextProvider>
   
  )
}
export default App
