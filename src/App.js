import './App.css'
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Footer from "./components/footer/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";


function App() {
  const { user } = useContext(Context)
  return (
    <>
    <Router>
      <Topbar />
      <Switch>
        <Route path='/' exact > <Home /> </Route>
        <Route path='/register' exact> {user ? <Home /> : <Register />} </Route>
        <Route path='/login' exact>  { user ? <Home /> : <Login />} </Route>
        <Route path='/write' exact> {user ? <Write /> : <Register />} </Route>
        <Route path='/settings' exact> {user ? <Settings /> : <Register />} </Route>
        <Route path='/post/:postId' exact> <Single /> </Route>
    
      <Register />
      </Switch>
    </Router>
    <Footer />
    </>
  );
}

export default App;
