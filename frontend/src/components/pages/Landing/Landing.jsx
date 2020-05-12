import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";
import { Card, Button } from "react-bootstrap";
//import { Button } from "react-bootstrap";
import videoimg from "./video.jpg";
import bookimg from "./book.jpeg";
import gearsimg from "./gears.png";
import eventsimg from "./events.png";

const Landing = (props) => {
  return (
    <div className="Landing">
      {/* first section */}
      <section className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <h1>We Make & Organize</h1>
            <div className="images">
              <div className = "box">
                <img src={videoimg} alt="avatar" className="rounded_image" />
                <p>Educational Videos</p>
              </div>
              <div className="box">
                <img src={bookimg} alt="avatar" className="rounded_image" />
                <p>Educational Comics</p>
              </div>
              <div className="box">
                <img src={gearsimg} alt="avatar" className="rounded_image" />
                <p>Educational Workshops</p>
              </div>
              <div className="box">
                <img src={eventsimg} alt="avatar" className="rounded_image" />
                <p>Educational Events</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section_background">
        <h1>Upcoming Events</h1>
        <div className="events">
          {/* <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://lp-cms-production.imgix.net/2019-06/79941051.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card> */}
          <h2>No Upcoming Events, check back soon</h2>
        </div>
        <div className="buttons">
          <Button variant="primary" size="lg" as={Link} to="/blog">
            Visit Our Blog Site
          </Button>
          <Button
            variant="success"
            size="lg"
            as={Link}
            to="/join"
            className="second_button"
          >
            Join Us
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Landing;
