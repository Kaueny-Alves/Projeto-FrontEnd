import React from "react";
import "./App.css";
//import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Login from "./Components/Login/Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Switch>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
