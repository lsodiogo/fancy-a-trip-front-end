function HomeView() {
   return (
      <>
         <div className="homepageHero">
            <div className="homepageHeroInfo">
               <img className="img-hero-1" src="images/paris.jpg" alt="paris"/>
               <img className="img-hero-3" src="images/travel.jpg" alt="travel-tools"/>
               <img className="img-hero-2" src="images/rollercoaster.jpeg" alt="rollercoaster"/>
               
               <p>DO YOU FANCY A TRIP?</p>

               <img className="img-hero-4" src="images/train.jpg" alt="train"/>
               <img className="img-hero-5" src="images/wedding.jpg" alt="weeding"/>
               <img className="img-hero-6" src="images/airplane.jpg" alt="airplane"/>
            </div>
         </div>



         <div className="travelCardsContainer">
            <div className="travelCard">
               <img className="travelCardImage" src="images/map.jpg" alt=""/>
               <div className="cardInfo">
               <p>Berlin</p>
               <p>2021-07-12</p>
               </div>
            </div>

            <div className="travelCard">
               <img className="travelCardImage" src="images/map.jpg" alt=""/>
               <div className="cardInfo">
               <p>Berlin</p>
               <p>2021-07-12</p>
               </div>
            </div>

            <div className="travelCard">
               <img className="travelCardImage" src="images/map.jpg" alt=""/>
               <div className="cardInfo">
               <p>Berlin</p>
               <p>2021-07-12</p>
               </div>
            </div>

            <div className="travelCard">
               <img className="travelCardImage" src="images/map.jpg" alt=""/>
               <div className="cardInfo">
               <p>Berlin</p>
               <p>2021-07-12</p>
               </div>
            </div>
         </div>



         <div className="mapContainer">
           <img src="images/map.jpg" alt=""/>
         </div>     
      </>
   )
};

export default HomeView;