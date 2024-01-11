import Hero from "../components/Hero";
import TravelsCardsContainer from "../components/TravelsCardsContainer";
import MapContainer from "../components/MapContainer";

function HomeView() {
   
   return (
      <>
         <Hero />

         <div className="travelCardsContainerBorder">
            <div className="travelCardsContainerHeader">LATEST TRIPS</div>
            <TravelsCardsContainer />
         </div>

         <MapContainer />  
      </>
   );

};

export default HomeView;