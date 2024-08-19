import { useState } from "react";
import { Button, Col, Dropdown, Form, Row } from "react-bootstrap";

const SendMessageForm = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const [title, setTitle] = useState("Parent");

  const handleSelect = (eventKey) => {
    setTitle(eventKey);
  };
  return (
    <>
      <Row className={` shadow rounded-4 bg-white border`}>
        <Col className={``}>
          <div className={`w-100 h-100 bg-white`}>
            <Form
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
              className={`p-4 d-flex align-items-center justify-content-center h-100`}
            >
              <Row className={`gap-3`}>
                <div className={`d-flex align-items-center gap-2 p-0`}>
                  <h6
                    className={`m-0 fw-semibold`}
                    style={{ color: "#303972" }}
                  >
                    Message To
                  </h6>

                  <Dropdown onSelect={handleSelect}>
                    <Dropdown.Toggle
                      className="bg-transparent border-0 p-0 fw-semibold text-decoration-underline"
                      style={{ color: "#FB7D5B" }}
                    >
                      {title}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item eventKey="Teacher">Teacher</Dropdown.Item>
                      <Dropdown.Item eventKey="Parent">Parent</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <Form.Group className={`p-0`}>
                  <Form.Label
                    style={{ color: "#303972" }}
                    className={`fw-semibold`}
                  >
                    Parent Name *
                  </Form.Label>
                  <Form.Control required type="text" className={`w-100`} />
                  <Form.Control.Feedback type={`invalid`}>
                    required field
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className={`p-0`}>
                  <Form.Label
                    style={{ color: "#303972" }}
                    className={`fw-semibold`}
                  >
                    Subject *
                  </Form.Label>
                  <Form.Control required type="text" className={`w-100`} />
                  <Form.Control.Feedback type={`invalid`}>
                    required field
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className={`p-0`}>
                  <Form.Label
                    style={{ color: "#303972" }}
                    className={`fw-semibold`}
                  >
                    Description *
                  </Form.Label>
                  <Form.Control
                    required
                    type="text"
                    className={`w-100`}
                    placeholder={`Enter a detailed description here...`}
                    as="textarea"
                    style={{ resize: "none", height: "140px" }}
                  />
                  <Form.Control.Feedback type={`invalid`}>
                    required field
                  </Form.Control.Feedback>
                </Form.Group>
                <Button
                  type="submit"
                  className={`bg-purple-100  border-0 w-25`}
                >
                  send
                </Button>
              </Row>
            </Form>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default SendMessageForm;
