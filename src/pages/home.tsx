import React from "react";
import Header from "../components/Header";
import { Link } from "react-router";

function Home() {
  return (
    <div className="home">
      <Header />

      <section>
        <h1>
          Latest Products
          <Link to={"/search"} className="findmore">
            More
          </Link>
        </h1>
      </section>
    </div>
  );
}

export default Home;
