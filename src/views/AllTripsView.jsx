import { useEffect, useState } from "react";

import mockAPIService from "../services/mockAPIService";
import TravelCards from "../components/TravelCards";

function AllTripsView() {
   const [travelData, setTravelData] = useState([]);
   const [sortOption, setSortOption] = useState("date");

   useEffect(function() {
      (async function() {
         const result = await mockAPIService.getTravelDataList();
         
         setTravelData(result);
      })();
   }, []);



   // FUNCTION TO SORT ALL TRIPS WHEN BUTTON SELECTED //
   useEffect(function() {
      if (sortOption === "date") {
         setTravelData([...travelData.sort((a, b) => a.checkin < b.checkin ? 1 : -1)]);  

      } else if (sortOption === "country") {
         setTravelData([...travelData.sort((a, b) => a.destination.country > b.destination.country ? 1 : -1)]);

      } else if (sortOption === "city") {
         setTravelData([...travelData.sort((a, b) => a.destination.city > b.destination.city ? 1 : -1)]);

      };
   }, [sortOption]);


   
   const handleSortOptionChange = (event) => {
      setSortOption(event.target.value);
   };
   
   return (
      <>
         <div className="mainContainerAllTripsPage">
            <div className="sortButton">
               <select value={sortOption} onChange={handleSortOptionChange}>
                  <option value="date">SORT BY LASTEST</option>
                  <option value="country">SORT BY COUNTRY (A-Z)</option>
                  <option value="city">SORT BY CITY (A-Z)</option>
               </select>
            </div>

            <div className="travelCardsContainer">
               {travelData
                  .map(item =>
                     <TravelCards key={item.id} travelData={item}/>
                  )
               }
            </div>
         </div>
      </>
   );
   
};

export default AllTripsView;