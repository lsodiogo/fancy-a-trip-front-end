import { useEffect, useState } from "react";
import { Link } from "wouter";

import mockAPIService from "../services/mockAPIService";
import TravelCards from "./TravelCards";



function TravelsCardsContainer() {

   const [travelData, setTravelData] = useState([]);

   useEffect(function() {
      (async function() {
         const result = await mockAPIService.getTravelDataList();
         
         setTravelData(result);
      })();
   }, []);

   const sortedFilteredTravelData = (travelData
      .sort((a,b) => a.checkin < b.checkin ? 1 : -1)
      .slice(0,3)
   );

   return (
      <>
         <div className="travelCardsContainer">
            {sortedFilteredTravelData
               .map(item =>
                  <TravelCards key={item.id} travelData={item}/>
               )
            }

            <Link href="/alltrips">
               <div className="travelCard">
                  <img className="travelCardSeeMore" src="/images/pinmap.svg" alt="map-pinned-icon"/>
                  <div className="cardInfo">
                     <p>SEE MORE</p>
                  </div>
               </div>
            </Link>
         </div>
      </>
   );
   
};

export default TravelsCardsContainer;