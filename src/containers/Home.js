import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>chargement</p>
  ) : (
    <div>
      <div>
        <div className="hero"></div>
      </div>
      <div className="homeOffers">
      {data.offers.map((offer, index) => {
        return (
          <Link to={`/offers/${offer._id}`} >
            
            <div  key={offer._id}>
              <h3> {offer.product_details[0].MARQUE} </h3>
              <p> {offer.product_details[1].TAILLE} </p>
              <p>{offer.product_price} €</p>
              
              <img
                src={offer.product_image.secure_url}
                alt={offer.product_name}
                
              />
            </div>
            </Link>
        );
      })}
  </div>
      {/* <Link to={`/offers`}> Aller à la page offers</Link> */}
    </div>
  );
};
export default Home;
