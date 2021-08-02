import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Offers = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [id]);

  return  isLoading ? (
    <p>Chargement</p>) : (
    <div className="offerPage">
      <div className="imgOffer">
        <img src={data.product_image.secure_url} alt="" />
      </div>
      {data.product_details.map((elem, index)=>{
        return (
          <div key={index} className="offerDetails">
          <p>Price: {data.product_price}</p>
          <p>MARQUE: </p>
          <p>TAILLE:</p>
          <p>ETAT:</p>
          <p>COULEUR:</p>
          <p>EMPLACEMENT:</p>
          <hr />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque id
          tenetur possimus, nisi ipsum quis, harum nulla molestiae qui et
          excepturi officia obcaecati? Praesentium, illo. Saepe culpa ipsa labore
          voluptate!
          <button>Acheter</button>
        </div>
        )
      })}
     
    </div>
  );
};

export default Offers;
