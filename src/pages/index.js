import * as React from "react";
/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import AboutUs from "../components/AboutUs";
import LatestProjects from "../components/LatestProjects";
import splashVideo from "../assets/splash.mp4";
import FlexBanner from "flex-banner";

const HomePage = () => {
  return (
    <>
      <FlexBanner
        title="We offer sign-on and referral bonuses for employees! Apply Today!"
        ctaLink="https://feinm.com/jobs"
        isCenter={true}
        wrapperStyle={{ backgroundColor: "var(--theme-ui-colors-primary,#ffb510)" }}
        mainStyleTitle={{ color: "black" }}
        crossStyle={{ color: "black" }}
      />
      <div
        className="position-relative d-flex justify-content-center align-items-center"
        style={{ height: "50vh", width: "100%", overflow: "hidden" }}
      >
        <div
          className="position-absolute d-flex justify-content-center align-items-center"
          style={{
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            zIndex: "92",
          }}
        ></div>
        <video
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          src={splashVideo}
          controls
          autoPlay
          muted
          loop
        >
          "Sorry, your browser doesn't support embedded videos. :("
        </video>
      </div>

      <section>
        <AboutUs />
      </section>

      <section sx={{ backgroundColor: "#f8f9fa", padding: "0 16px 32px" }}>
        <Container>
          <Styled.h1>Latest Projects</Styled.h1>
          <p sx={{ textAlign: "center" }}>
            Here are some of Franklin's current and past projects.
          </p>
          <Container className="mt-5">
            <LatestProjects />
            <Row className="row justify-content-center">
              <Col className="d-flex justify-content-end">
                <Link className="btn btn-dark mt-2" to="/projects">
                  View More
                </Link>
              </Col>
            </Row>
          </Container>
        </Container>
      </section>
    </>
  );
};

export default HomePage;
