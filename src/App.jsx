import { Route, Switch } from "wouter";

import Header from "./components/Header";
import Footer from "./components/Footer";

import HomeView from "./views/HomeView";
import NewLocationView from "./views/NewLocationView";
import AboutView from "./views/AboutView";
import NotFoundView from "./views/NotFoundView";

function App() {

  return (
    <>
      <Header/>
      
      <Switch>
        <Route path="/">
          <HomeView/>
        </Route>

        <Route path="/newLocation">
          <NewLocationView/>
        </Route>

        <Route path="/about">
          <AboutView/>
        </Route>

        <Route>
          <NotFoundView/>
        </Route>
      </Switch>
      
      <Footer/>
    </>
  )
};

export default App;