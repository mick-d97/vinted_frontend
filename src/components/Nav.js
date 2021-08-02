import logo from "../assets/img/logo.png";

const Nav = () => {
  return (
    <div className="nav">
      <div className="logo">
        <img src={logo} alt="Vinted"/>
      </div>
      <div className="search">
        {" "}
        <input type="text" />{" "}
      </div>
      <div>
        {" "}
        <button>S'inscrire</button>{" "}
      </div>
      <div>
        {" "}
        <button> Se connecter</button>{" "}
      </div>
      <div>
        {" "}
        <button>Vends maintenant</button>{" "}
      </div>
    </div>
  );
};

export default Nav;
