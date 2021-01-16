import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import contactanos from "./pages/contactanos";
import SingleRooms from "./pages/SingleRooms";
import Error from "./pages/Error";

import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/contactanos/" component={contactanos} />
        <Route exact path="/rooms/:slug" component={SingleRooms} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
