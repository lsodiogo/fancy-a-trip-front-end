import { useEffect, useState } from "react";

import mockAPIService from "../services/mockAPIService";
import TravelCards from "../components/TravelCards";

function AllTripsView() {
   const [travelCard, setTravelCard] = useState([]);

   useEffect(function() {
      (async function() {
         const result = await mockAPIService.getTravelCardList();
         
         setTravelCard(result);
      })();
   }, []);
   
   return (
      <>
        <div className="travelCardsContainer">
            {travelCard
               .map(item =>
                  <TravelCards key={item.id} travelInfo={item}/>
               )
            }
         </div>
      </>
   );
   
};

export default AllTripsView;