import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const SignUp = ({ setUser }) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
  
    const history = useHistory();
  
    const handleSubmit = async (event) => {
      try {
        event.preventDefault();
        // requête axios au backend
        const response = await axios.post(
          "https://lereacteur-vinted-api.herokuapp.com/user/SignUp",
          {
            email: email,
            username: username,
            password: password,
          }
        );
        
        if (response.data.token) {
          
          setUser(response.data.token);
          
          history.push("/"); //redirection de l'utilisateur
        }
        console.log(response);
      } catch (error) {
        
        console.log(error.response);
        console.log(error.message);
        if (error.response.status === 409) {
          setError("email déjà existant.");
        }
      }
    };
  
    return (
      <div className="signUpForm">
        <form onSubmit={handleSubmit}>
            <div> <input
            onChange={(event) => setUsername(event.target.value)}
            type="text"
            placeholder="username"
          /></div>
         
          <div> <input
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="email"
          /></div>
         
          <div> <input
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            placeholder="password"
          /></div>
         
          <p style={{ color: "red" }}>{error}</p>
          <input type="submit" value="Inscription" />
        </form>
      </div>
    );
  };
  
  export default SignUp;