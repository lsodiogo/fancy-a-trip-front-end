import { Link } from "wouter";

function Header() {
   return (
      <>
         <header className="header">
            <a className="header-left" href="/">FANCY A TRIP</a>

            <div className="header-right">
               <Link className="active" href="/">
                  <img src="images/home.svg" alt="home-icon"/>
                  <span>HOME</span>
               </Link>

               <Link href="/newlocation">
                  <img src="images/file.svg" alt="file-icon"/>
                  <span> TRIP SUGGESTION</span>
               </Link>

               <Link href="/about">
                  <img src="images/user.svg" alt="user-icon"/>
                  <span> ABOUT</span>
               </Link>
            </div>
         </header>
      </>
   )
};

export default Header;