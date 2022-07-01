/** @jsx jsx */
import React from "react";
import { jsx, Styled } from "theme-ui";
import { Container, Col, Row } from "react-bootstrap";

const ContactPage = () => {
  return (
    <>
      <section>
        <Container>
          <Styled.h1>Contact</Styled.h1>
          <Container className="content">
            <Row>
              <Col className="mb-3">
                <h2>Call, Email, or Visit</h2>
                <h4 className="pb-4">Estimates are always free</h4>
                <img
                  src="https://maps.googleapis.com/maps/api/staticmap?key=AIzaSyDjlt_jp92OXdVP7Bl90c4dGKfWZxmRbaw&size=1110x500&zoom=11&style=&markers=size:mid|color:0xffb510|700+Industrial+Ave+NE+87107&style=feature:administrative|visibility:off&style=feature:all|saturation:-100"
                  alt="Google Map"
                  className="w-100"
                />
              </Col>
            </Row>
            <Row>
              <div className="col-md-6 table-responsive mb-3">
                <table className="table">
                  <thead className="thead-light">
                    <tr>
                      <th colSpan="2">Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td width="50">
                        <i className="fa fa-map-marker-alt mr-3"></i>
                      </td>
                      <td>
                        700 Industrial Ave. NE
                        <br />
                        Albuquerque, NM 87107
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fa fa-phone mr-3"></i>
                      </td>
                      <td>(505) 884-6947 (Office)</td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fa fa-print mr-3"></i>
                      </td>
                      <td>(505) 883-2604 (Fax)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-md-6 table-responsive mb-3">
                <table className="table">
                  <thead className="thead-light">
                    <tr>
                      <th colSpan="2">Hours</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Monday - Friday</td>
                      <td>8AM - 5PM</td>
                    </tr>
                    <tr>
                      <td>Saturday</td>
                      <td>Closed</td>
                    </tr>
                    <tr>
                      <td>Sunday</td>
                      <td>Closed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Row>
          </Container>
        </Container>
      </section>

      <script src="/js/map.js" type="text/javascript"></script>
      <script
        async
        defer
        src="https://maps.googleapis.com/maps/api/js?key={{googleApiKey}}&callback=initMap"
        type="text/javascript"
      ></script>
    </>
  );
};

export default ContactPage;
