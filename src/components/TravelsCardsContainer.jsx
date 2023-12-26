import { useEffect, useState } from "react";
import { Link } from "wouter";

import mockAPIService from "../services/mockAPIService";
import TravelCards from "./TravelCards";

function TravelsCardsContainer() {

   const [travelCard, setTravelCard] = useState([])

   useEffect(function() {
      (async function() {
         const result = await mockAPIService.getTravelCardList()
         
         setTravelCard(result)
      })()
   }, [])

   const sortedFilteredTravelCard = (travelCard
      .sort((a,b) => a.checkin < b.checkin ? 1:-1)
      .slice(0,3)
   )

   return (
      <>
         <div className="travelCardsContainer">
            {sortedFilteredTravelCard
               .map(item =>
                  <TravelCards key={item.id} travelInfo={item}/>
               )
            }

            <Link to="/alltrips">
               <div className="travelCard">
                  <img className="travelCardSearch" src="images/search.svg" alt="search-icon"/>
                  <div className="cardInfo">
                     <p>SEE MORE</p>
                  </div>
               </div>
            </Link>
         </div>
      </>
   )
};

export default TravelsCardsContainer;