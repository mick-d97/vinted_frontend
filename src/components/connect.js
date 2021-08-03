import { Link } from "react-router-dom";

const Connect = ({ tokenUser, setUser }) => {
  return tokenUser ? (
    <button onClick={() => setUser(null)}>Se déconnecter</button>
  ) : (
      <>
    <div className="buttonConnect">
        <div>
        <button><Link to="/login">Se connecter</Link></button>
        </div>
      <div>
      <button><Link to="/signup">S'inscrire</Link></button>
      </div>
     <div>
         
     </div>
    </div>
    </>
  );
};

export default Connect;