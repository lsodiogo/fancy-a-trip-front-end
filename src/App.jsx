import { Route, Switch } from "wouter";

import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";

import HomeView from "./views/HomeView";
import AllTripsView from "./views/AllTripsView";
import NewLocationView from "./views/NewLocationView";
import AboutView from "./views/AboutView";
import DetailedTripView from "./views/DetailedTripView";
import NotFoundView from "./views/NotFoundView";

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

        <Route path="/trips/:city">
          {params => <DetailedTripView pathParams={params.city}/>}
        </Route>

        <Route>
          <NotFoundView />
        </Route>

        {/* <Route component={NotFoundView} /> */}
      </Switch>
      
      <Footer />
    </>
  );

};

export default App;