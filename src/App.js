import "./App.css";
import{useState} from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import Offers from "./containers/Offers";
import Nav from "./components/Nav";
import SignUp from "./containers/SignUp";
import Login from "./containers/Login";
import Cookies from "js-cookie";

function App() {
  const [tokenUser, setTokenUser] = useState(Cookies.get("tokenUser") || null);

  const setUser = (token) => {
    if (token) {
      Cookies.set("tokenUser", token, {
        expires: 5,
        secure: true,
      });
      setTokenUser(token)
    }else{
      Cookies.remove(tokenUser)
      setTokenUser(null)
    }
  };

  return (
    <Router>
      <Nav tokenUser={tokenUser} setUser={setUser} />
      <Switch>
        <Route path="/offers/:id">
          <Offers />
        </Route>
        
        <Route path="/SignUp">
          <SignUp setUser={setUser}/>
        </Route>
        <Route path="/Login">
          <Login setUser={setUser} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
