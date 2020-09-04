import React, { useState } from "react";
import "./Banner.css";
import { Button } from "@material-ui/core";
import Search from "./DateSearch";

function Banner() {
  const [showSearch, setshowSearch] = useState(false);
  return (
    <div className="banner">
      <div className="banner_search">
        {showSearch && <Search />}

        <Button
          variant="outlined"
          className="search_button"
          onClick={() => setshowSearch(!showSearch)}
        >
          {!showSearch ? " Search Dates" : "Hide"}
        </Button>
      </div>
      <div className="banner_info">
        <h1>Go Near</h1>
        <h5>
          Plan a different kind of getaway to uncover the hidden gems near you.
        </h5>
        <Button variant="outlined">Explore Nearby</Button>
      </div>
    </div>
  );
}

export default Banner;
