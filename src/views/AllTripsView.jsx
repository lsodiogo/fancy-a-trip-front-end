import { useEffect, useState } from "react";

import mockAPIService from "../services/mockAPIService";
import TravelCards from "../components/TravelCards";

function AllTripsView() {
   const [travelData, setTravelData] = useState([]);

   useEffect(function() {
      (async function() {
         const result = await mockAPIService.getTravelDataList();
         
         setTravelData(result);
      })();
   }, []);
   
   return (
      <>
        <div className="travelCardsContainer">
            {travelData
               .map(item =>
                  <TravelCards key={item.id} travelData={item}/>
               )
            }
         </div>
      </>
   );
   
};

export default AllTripsView;