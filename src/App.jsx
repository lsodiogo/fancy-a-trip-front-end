import { Route, Switch } from "wouter";

import Header from "./components/Header";
import Footer from "./components/Footer";

import HomeView from "./views/HomeView";
import AllTripsView from "./views/AllTripsView";
import NewLocationView from "./views/NewLocationView";
import AboutView from "./views/AboutView";
import DetailedTripView from "./views/DetailedTripView";
import NotFoundView from "./views/NotFoundView";

import ScrollToTop from "./components/ScrollToTop";

function App() {

  return (
    <>
      <ScrollToTop />

      <Header />
      
      <Switch>
        <Route path="/">
          <HomeView />
        </Route>

        <Route path="/alltrips">
          <AllTripsView />
        </Route>

        <Route path="/newlocation">
          <NewLocationView />
        </Route>

        <Route path="/about">
          <AboutView />
        </Route>

        <Route path="/trip/:city">
          {params => <DetailedTripView pathParams={params.city}/>}
        </Route>

        <Route>
          <NotFoundView />
        </Route>
      </Switch>
      
      <Footer />
    </>
  )
};

export default App;