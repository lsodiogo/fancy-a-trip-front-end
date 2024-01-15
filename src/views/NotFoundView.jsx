import { Link } from "wouter";



function NotFoundView() {
    
    return (
        <>
            <div className="notFoundContainer">
                <h1>4<img src="/images/globe.svg" alt="globe-icon"/>4</h1>
                <h2>WHOOOPS...</h2>
                <h3>you seem to be lost in your own world</h3>
                <h3>this is not the page you were looking for</h3>
                <Link href="/">
                  <span>go back home</span>
                </Link>
            </div>
        </>
    );
    
};

export default NotFoundView;