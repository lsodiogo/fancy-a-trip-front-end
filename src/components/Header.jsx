import { Link } from "wouter"

function Header() {
   return (
      <>
         <header className="header">
            <a className="header-left" href="/">FANCY A TRIP</a>

            <div className="header-right">
               <a className="active" href="/">
                  <img src="images/home.svg" alt="home-icon"/>
                  <span> HOME</span>
               </a>

               <a href="/newLocation">
                  <img src="images/file.svg" alt="file-icon"/>
                  <span> ADD LOCATION</span>
               </a>

               <a href="/about">
                  <img src="images/user.svg" alt="user-icon"/>
                  <span> ABOUT</span>
               </a>
            </div>
         </header>
      </>
   )
};

export default Header;