import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = ({ setUser }) => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const history = useHistory();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/Login",
        {
          email: email,
          password: password,
        }
      );
      console.log(response);
      if (response.data.token) {
        setUser(response.data.token);
        history.push("/");
      }
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <div className="signInForm">
      <form onSubmit={handleSubmit}>
        <div><input
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          placeholder="email"
        /></div>
        
        <div> <input
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          placeholder="mot de passe"
        /></div>
       
        <input type="submit" value="Connexion" />
      </form>
    </div>
  );
};
export default Login