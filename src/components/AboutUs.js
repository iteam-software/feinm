/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { useStaticQuery, graphql, Link } from "gatsby";
import { Container, Row, Col, Card } from "react-bootstrap";

const AboutUs = () => {
  const cardTitleClasses = "card-title text-center font-weight-bold";
  const cardBodyClasses = "card-text text-center";
  const data = useStaticQuery(graphql`
    {
      concreteImage: allImageSharp(
        filter: { fixed: { originalName: { eq: "concrete.jpg" } } }
      ) {
        nodes {
          fixed {
            src
            originalName
          }
        }
      }
      earthmovingImage: allImageSharp(
        filter: { fixed: { originalName: { eq: "earthmoving.jpg" } } }
      ) {
        nodes {
          fixed {
            src
            originalName
          }
        }
      }
      pavingImage: allImageSharp(
        filter: { fixed: { originalName: { eq: "paving.jpg" } } }
      ) {
        nodes {
          fixed {
            src
            originalName
          }
        }
      }
      utilitiesImage: allImageSharp(
        filter: { fixed: { originalName: { eq: "utilities.jpg" } } }
      ) {
        nodes {
          fixed {
            src
            originalName
          }
        }
      }
    }
  `);
  const concreteImage = data.concreteImage.nodes[0].fixed.src;
  const earthmovingImage = data.earthmovingImage.nodes[0].fixed.src;
  const pavingImage = data.pavingImage.nodes[0].fixed.src;
  const utilitiesImage = data.utilitiesImage.nodes[0].fixed.src;
  return (
    <Container>
      <Styled.h1>About Us</Styled.h1>

      <h3 sx={{ textAlign: "center" }}>
        Franklin's is committed to Safety, Quality, and Customer Satisfaction.
      </h3>
      <p sx={{ textAlign: "center" }}>
        Franklin's Earthmoving Inc., is the industry leader in New Mexico
        specializing in{" "}
        <strong>Earthwork, Utilities, Concrete, and Paving</strong>; ranging
        from Commercial, Pueblo, Industrial, Government, Private, Public
        Infrastructure, and Residential. Franklin's Earthmoving Inc., has proven
        project success and has had years of experience exceeding client's
        expectations and schedules.
      </p>

      <Container className="mt-5">
        <Row>
          <Col sm={6} lg={3} className="mb-3">
            <Card className="h-100">
              <img
                className="card-img-top"
                src={earthmovingImage}
                alt="Earthmoving equipment"
              />
              <div className="card-body px-2">
                <h5 className={cardTitleClasses}>Earthmoving</h5>
                <p className={cardBodyClasses} sx={{ lineHeight: "1.2rem" }}>
                  No matter how small or how big your earthwork project is,
                  Franklin's has the right equipment for your project.
                </p>
              </div>
              <div className="pb-3 mx-auto">
                <Link
                  to="/services/earthmoving"
                  className="btn btn-rnd btn-dark"
                >
                  Read More
                </Link>
              </div>
            </Card>
          </Col>
          <Col sm={6} lg={3} className="mb-3">
            <Card className="h-100">
              <img
                className="card-img-top"
                src={pavingImage}
                alt="Paving equipment"
              />
              <div className="card-body px-2">
                <h5 className={cardTitleClasses}>Paving</h5>
                <p className={cardBodyClasses}>
                  Franklin's experienced staff makes the paving process look
                  easy.
                </p>
              </div>
              <div className="pb-3 mx-auto">
                <Link to="/services/paving" className="btn btn-rnd btn-dark">
                  Read More
                </Link>
              </div>
            </Card>
          </Col>
          <Col sm={6} lg={3} className="mb-3">
            <Card className="h-100">
              <img
                className="card-img-top"
                src={concreteImage}
                alt="Concrete installation"
              />
              <div className="card-body px-2">
                <h5 className={cardTitleClasses}>Concrete</h5>
                <p className={cardBodyClasses}>
                  Franklin's Earthmoving Inc. is a commercial, industrial, and
                  residential contractor.
                </p>
              </div>
              <div className="pb-3 mx-auto">
                <Link to="/services/concrete" className="btn btn-rnd btn-dark">
                  Read More
                </Link>
              </div>
            </Card>
          </Col>
          <Col sm={6} lg={3} className="mb-3">
            <Card className="h-100">
              <img
                className="card-img-top"
                src={utilitiesImage}
                alt="Utilities being installed"
              />
              <div className="card-body px-2">
                <h5 className={cardTitleClasses}>Utilities</h5>
                <p className={cardBodyClasses}>
                  Franklin's utility crews lead the New Mexico industry in
                  safety, quality, and performance.
                </p>
              </div>
              <div className="pb-3 mx-auto">
                <Link to="/services/utilities" className="btn btn-rnd btn-dark">
                  Read More
                </Link>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default AboutUs;
