import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { FormContext } from "../formcontex/formcontex";
import "./Pages.css";

const P3 = ({ setPage }) => {
  const {
    Symptoms,
    History_of_HIV,
    Pre_Exposure_Prophylaxis,
    setSymptoms,
    setHistory_of_HIV,
    setPre_Exposure_Prophylaxis,
    setValidateP3,
  } = useContext(FormContext);

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(false);
    } else {
      setPage(4);
      setValidateP3(true);
    }
    setValidated(true);
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-3 align">
        <div className="col-lg-12  justify-content-center">
          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            action="#"
            method="POST"
          >
            <Row className="justify-content-center">
             

              <Form.Group
                as={Col}
                md="8"
                lg="9"
                controlId="validationCustomUsername"
                className="mtop-4"
              >
                <Form.Label>
                  <b className="me-2">11)</b> available_bus_drivers
                </Form.Label>
                <InputGroup hasValidation>
                  <Form.Select aria-label="Default select example">
                    <option value="enough">enough</option>
                    <option value="no">no</option>
                  </Form.Select>

                  <Form.Control.Feedback type="invalid">
                    choose One of that
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              <Form.Group
                as={Col}
                md="8"
                lg="9"
                controlId="validationCustomUsername"
                className="mtop-4"
              >
                <Form.Label>
                  <b className="me-2">12)</b> weather
                </Form.Label>
                <InputGroup hasValidation>
                  <Form.Select aria-label="Default select example">
                    <option value="normal">normal</option>
                    <option value="rain">rain</option>
                  </Form.Select>

                  <Form.Control.Feedback type="invalid">
                    choose One of that
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              <Form.Group
                as={Col}
                md="8"
                lg="9"
                controlId="validationCustomUsername"
                className="mtop-4"
              >
                <Form.Label>
                  <b className="me-2">13)</b> route_condition
                </Form.Label>
                <InputGroup hasValidation>
                  <Form.Select aria-label="Default select example">
                    <option value="good">good</option>
                    <option value="slippery">slippery</option>
                  </Form.Select>

                  <Form.Control.Feedback type="invalid">
                    choose One of that
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              <Form.Group
                as={Col}
                md="8"
                lg="9"
                controlId="validationCustomUsername"
                className="mtop-4"
              >
                <Form.Label>
                  <b className="me-2">12)</b> busy reason
                </Form.Label>
                <InputGroup hasValidation>
                  <Form.Select aria-label="Default select example">
                    <option value="normal">normal</option>
                    <option value="school">school</option>
                    <option value="school,normal">school,normal</option>
                    <option value="office">office</option>
                    <option value="office,school">office,school</option>
                  </Form.Select>

                  <Form.Control.Feedback type="invalid">
                    choose One of that
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>
            <Row className=" d-flex justify-content-center">
              <Col
                md={12}
                lg={12}
                className="d-flex justify-content-center mt-4"
              >
                <Button type="submit">Next</Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default P3;
