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
  return isLoading ? (
    <p>En cours de chargement...</p>
  ) : (
    <div className="offers">
      <img src={data.product_image.secure_url} alt={data.product_name} />
      <p>{data.product_price}</p>
      <ul>
        {data.product_details.map((elem, index) => {
          const keys = Object.keys(elem);
          // 1er tour : ["MARQUE"]
          // 2e tour : ["TAILLE"]

          return (
            <li key={index}>
              <span>{keys[0]}</span>
              <span>{elem[keys[0]]}</span>
              {/* 1er tour : elem.MARQUE
                  2e tour : elem.TAILLE
               */}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
//   return  isLoading ? (
//     <p>Chargement</p>) : (
//     <div className="offerPage">
//       <div className="imgOffer">
//         <img src={data.product_image.secure_url} alt="" />
//       </div>
//       {data.product_details.map((elem, index)=>{
//         return (
//           <div key={index} className="offerDetails">
//           <p>Price: {data.product_price}</p>
//           <p>MARQUE: </p>
//           <p>TAILLE:</p>
//           <p>ETAT:</p>
//           <p>COULEUR:</p>
//           <p>EMPLACEMENT:</p>
//           <hr />
          
//           <button>Acheter</button>
//         </div>
//         )
//       })}
     
//     </div>
//   );
// };

export default Offers;
