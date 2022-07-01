/** @jsx jsx */
import React from "react";
import { jsx, Styled } from "theme-ui";
import { Container, Col, Form } from "react-bootstrap";

const ApplyNowForm = ({ pageContext }) => {
  return (
    <>
      <section>
        <Container>
          <Styled.h1>Equal Opportunity Employer</Styled.h1>
          <p className="mb-5">
            Franklin's Earthmoving Inc. is an Equal Opportunity Employer and
            encourages women, minorities, veterans and the disabled to apply.
            Franklin's recruits, hires and promotes all job classifications
            based solely upon the personal qualifications of the individual. All
            Employees are treated equally with respect to compensation and
            opportunities for advancement.
          </p>
        </Container>
      </section>

      <section>
        <Container>
          <Styled.h1>Submit an Application</Styled.h1>
          <Form
            className="text-left my-5"
            name="applicationForm"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="applicationForm"/>
            <Form.Row>
              <Col md={6}>
                <Form.Group controlId="formFirstName">
                  <Form.Label>First Name *</Form.Label>
                  <Form.Control required name="formFirstName" type="text"/>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formLastName">
                  <Form.Label>Last Name *</Form.Label>
                  <Form.Control required name="formLastName" type="text"/>
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email *</Form.Label>
                  <Form.Control required type="email" name="formEmail" />
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Group controlId="formAddress1">
                  <Form.Label>Address *</Form.Label>
                  <Form.Control required name="formAddress1" type="text"/>
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Group controlId="formAddress2">
                  <Form.Label>Address 2</Form.Label>
                  <Form.Control name="formAddress2" type="text"/>
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col md={7}>
                <Form.Group controlId="formCity">
                  <Form.Label>City *</Form.Label>
                  <Form.Control required name="formCity" type="text"/>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formState">
                  <Form.Label>State *</Form.Label>
                  <Form.Control required name="formState" type="text"/>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formZip">
                  <Form.Label>Zip Code *</Form.Label>
                  <Form.Control required name="formZip" type="number"/>
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Group controlId="formCountry">
                  <Form.Label>Country *</Form.Label>
                  <Form.Control required name="formCountry" type="text"/>
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Group controlId="formPhone">
                  <Form.Label>Phone *</Form.Label>
                  <Form.Control required name="formPhone" type="number"/>
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Group controlId="formPhoneEmergency">
                  <Form.Label>Emergency Phone *</Form.Label>
                  <Form.Control required name="formPhoneEmergency" type="number"/>
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
              <fieldset>
              <legend>Have you ever worked at Franklin's?</legend>
              <p>
                <label>
                  <input type="radio" name="previouslyWorkedAtFranklins" value="Yes"/> Yes
                </label>
              </p>
              <p>
                <label>
                  <input type="radio" name="previouslyWorkedAtFranklins" value="No"/> No
                </label>
              </p>
            </fieldset>
              </Col>
            </Form.Row>
            <Form.Row className="mb-3">
              <Col>If so, when did you work here?</Col>
            </Form.Row>
            <Form.Row>
              <Col md={6}>
                <Form.Group controlId="previouslyWorkedDateStarted">
                  <Form.Label>Previous Start Date</Form.Label>
                  <Form.Control type="date" className="w-100" name="previouslyWorkedDataStarted"/>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="previouslyWorkedDateEnded">
                  <Form.Label>Previous End Date</Form.Label>
                  <Form.Control type="date" className="w-100" name="previouslyWorkedDateEnded"/>
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Group controlId="startDate">
                  <Form.Label>
                    <strong>When can you start? *</strong>
                  </Form.Label>
                  <Form.Control type="date" required name="startDate" />
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Group controlId="positionDesired">
                  <Form.Label>Position Desired *</Form.Label>
                  {pageContext ? (
                    <Form.Control required defaultValue={pageContext.title}  name="positionDesired" type="text"/>
                  ) : (
                    <Form.Control required name="positionDesired" type="text"/>
                  )}
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Group controlId="expectedPay">
                  <Form.Label>Expected Pay *</Form.Label>
                  <Form.Control required name="expectedPay" type="text" />
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Group controlId="pastEmployment1">
                  <Form.Label>
                    <strong>Past Employment #1 *</strong>
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="5"
                    name="pastEmployment1"
                    required
                  ></Form.Control>
                  <small>
                    List company name, address, phone #, employment dates, job
                    title, starting and ending pay, and reason for leaving:
                  </small>
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Group controlId="pastEmployment2">
                  <Form.Label>
                    <strong>Past Employment #2</strong>
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="5"
                    name="pastEmployment2"
                  ></Form.Control>
                  <small>
                    List company name, address, phone #, employment dates, job
                    title, starting and ending pay, and reason for leaving:
                  </small>
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Group controlId="pastEmployment3">
                  <Form.Label>
                    <strong>Past Employment #3</strong>
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="5"
                    name="pastEmployment3"
                  ></Form.Control>
                  <small>
                    List company name, address, phone #, employment dates, job
                    title, starting and ending pay, and reason for leaving:
                  </small>
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col className="mb-3 col form-group">
              <fieldset>
              <legend>Franklin's may contact the employers listed above? *</legend>
              <p>
                <label>
                  <input type="radio" name="contactPreviousEmployers" value="Yes"/> Yes
                </label>
              </p>
              <p>
                <label>
                  <input type="radio" name="contactPreviousEmployers" value="No"/> No
                </label>
              </p>
            </fieldset>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Group controlId="contactPreviousEmployersReason">
                  <Form.Label>
                    <strong>
                      If no to the question above, list the reasons why
                      Franklin's cannot contact previous employers.
                    </strong>
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="5"
                    name="contactPreviousEmployersReason"
                  ></Form.Control>
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Group controlId="agreeStatement">
                  <p className="text-justify font-weight-bold">
                    Please Read and Understand This Statement Before Signing
                    Your Application: The information I provided in this
                    application for employment is true. False, incomplete or
                    misrepresented information will be sufficient cause for my
                    application to be reject or, if discovered after I am
                    employed, cause for immediate termination of my employment.
                    I authorize the employer to obtain information about me from
                    previous employers, educational institutions and other
                    parties to verify the accuracy of the information in this
                    application, a related employment resume or personal
                    interview. I wave all rights and claims I may otherwise have
                    against the employer or its representatives, for seeking,
                    and using information to evaluate my employment request and
                    all other persons who provide information for this purpose.
                    This application will expire in 30 days. Unless otherwise
                    notified, I understand that my status as an applicant will
                    end. I may re-apply for employment in the future by
                    completing a new application. This application is not an
                    employment agreement. If I accept an offer of employment I
                    understand the employer may terminate my employment at any
                    time, with or without prior notice. I accept all terms and
                    conditions in the above statement.
                  </p>

                  <Form.Label>I agree with this statement.</Form.Label>
                  <Form.Check type="checkbox" name="agreeStatement" value="yes" required />
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <div className="mb-3 col"></div>
            </Form.Row>
            <Form.Row>
              <div className="mb-3 col">
                <button
                  type="submit"
                  className="btn"
                  sx={{
                    backgroundColor: "primary",
                    "&:hover": { filter: "brightness(.9)" },
                  }}
                >
                  Submit
                </button>
              </div>
            </Form.Row>
          </Form>
        </Container>
      </section>
    </>
  );
};

export default ApplyNowForm;
