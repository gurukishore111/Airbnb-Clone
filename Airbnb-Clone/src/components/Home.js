import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Cards from "./Cards";
import DarkCard from "./DarkCard";
import { Button } from "@material-ui/core";
function Home() {
  return (
    <div className="home">
      <Banner />

      <div className="home_selection">
        <Cards
          image="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hosts."
        />
        <Cards
          image="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
          title="Unique stays"
          description="Spaces that are more than just a place to sleep."
        />
        <Cards
          image="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
          title="Entire homes"
          description="Comfortable private places, with room for friends or family."
        />
      </div>
      <div className="home_selection">
        <Cards
          image="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
          title="3 Bedroom Flat in Bournemouth"
          description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
          price="£130/night"
        />
        <Cards
          image="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
          title="Penthouse in London"
          description="Enjoy the amazing sights of London with this stunning penthouse"
          price="£350/night"
        />
        <Cards
          image="https://media.nomadicmatt.com/2018/apartment.jpg"
          title="1 Bedroom apartment"
          description="Superhost with great amenities and a fabolous shopping complex nearby"
          price="£70/night"
        />
      </div>
      <div className="home_selection2">
        <div className="words">
          <h1>Broadway Online Experiences</h1>
          <p>
            Join live, interactive performances and conversations with people
            from Broadway and beyond. Without leaving home.Plan a different kind
            of getaway to uncover the hidden gems near you.
          </p>
          <Button variant="outlined" className="search_button">
            Explore More
          </Button>
        </div>
        <DarkCard
          image="https://a0.muscache.com/im/pictures/38aeacb5-7e77-4bf6-a813-754605020922.jpg?im_w=480"
          title="Day in the life of vegas dancer"
        />
        <DarkCard
          image="https://a0.muscache.com/im/pictures/7f607dbc-c51c-482e-8b67-55ded3e7f864.jpg?im_w=320"
          title="Night of Magic"
        />
        <DarkCard
          image="https://a0.muscache.com/im/pictures/e77da774-9e72-46d6-a7fd-7d159f823046.jpg?im_w=320"
          title="Share the evening of music and healing"
        />
      </div>
    </div>
  );
}

export default Home;
