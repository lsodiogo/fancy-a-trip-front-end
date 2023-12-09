function App() {

  return (
    <>
      <header className="header">
        <a href="#" className="header-left">FANCY A TRIP</a>

        <div className="header-right">
          <a href="#" className="active">
            <img src="images/home.svg" alt="home-icon"/>
            <span> Home</span>
          </a>

          <a href="#">
            <img src="images/file.svg" alt="file-icon"/>
            <span> Add Location</span>
          </a>

          <a href="#">
            <img src="images/user.svg" alt="user-icon"/>
            <span> The Traveler</span>
          </a>
        </div>
      </header>

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