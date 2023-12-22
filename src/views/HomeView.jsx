import Hero from "../components/Hero";
import TravelsCardsContainer from "../components/TravelsCardsContainer";
import MapContainer from "../components/MapContainer";

function HomeView() {
   return (
      <>
         <Hero/>

         <h1 className="travelCardsContainerHeader">LATEST</h1>
         <TravelsCardsContainer/>

         <MapContainer/>     
      </>
   )
};

export default HomeView;