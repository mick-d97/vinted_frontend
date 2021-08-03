import logo from "../assets/img/logo.png";
import Connect from "./connect";

const Nav = ({ tokenUser, setUser }) => {
  console.log(tokenUser);
  return tokenUser ? (
    <button onClick={() => setUser(null)}>Se déconnecter</button>
  ) : (
    <div className="nav">
      <div className="logo">
        <img src={logo} alt="Vinted" />
      </div>
      <div className="search">
        <input type="text" />
      </div>
      
      <div>
        <Connect tokenUser={tokenUser} setUser={setUser} />
      </div>
      <div>
        <button>Vends maintenant</button>
      </div>
    </div>
  );
};

export default Nav;
