function App() {

  return (
    <>
      <header className="header">
        <a className="header-left" href="#">FANCY A TRIP</a>

        <div className="header-right">
          <a className="active" href="#">
            <img src="images/home.svg" alt="home-icon"/>
            <span> HOME</span>
          </a>

          <a href="#">
            <img src="images/file.svg" alt="file-icon"/>
            <span> ADD LOCATION</span>
          </a>

          <a href="#">
            <img src="images/user.svg" alt="user-icon"/>
            <span> ABOUT</span>
          </a>
        </div>
      </header>



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



      <footer className="footer">
        <div className="socialMedia">
          <a href="#">
            <img src="images/home.svg" alt="home-icon"/>
          </a>

          <a href="#">
            <img src="images/email.svg" alt="email-icon"/>
          </a>

          <a href="#">
            <img src="images/instagram.svg" alt="instagram-icon"/>
          </a>
        </div>

        <p className="copyright">Diogo Lima @ 2024</p>
      </footer>
    </>
  )
};

export default App;