import React from "react";
import Navbar from "../navbar/navbar";
import Header from "./Header";
import HowTo from "./HowTo";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Header />
        <HowTo />
      </div>
    </div>
  );
}

export default Home;
