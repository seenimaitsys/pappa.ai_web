import { useEffect, useState } from "react";
import login_img from "../../assets/images/login_img.png";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Image,
  Dropdown,
  DropdownButton,
  DropdownToggle,
} from "react-bootstrap";
import https from "../../axios";
const LoginForm = () => {
  const [validated, setValidated] = useState(false);
  const [schools, setSchools] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSchool, setSelectedSchool] = useState("Select School");
  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const response = await https.get(
          "http://3.16.40.123/pappa-api/getAllSchoolList"
        );
        console.log(response.data.school_list);
        setSchools(response.data.school_list);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSchools();
  }, []);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  const handleSelect = (schoolId) => {
    const selected = schools.find((school) => school.school_id === schoolId);
    setSelectedSchool(selected ? selected.name : "Select School");
  };
  return (
    <>
      <Container
        className={`d-flex h-100  justify-content-center align-items-center`}
        fluid
        style={{ backgroundColor: "#EDF1F7" }}
      >
        <Col
          xl={7}
          sm={12}
          className="d-flex justify-content-center align-items-center p-3 p-xl-5"
        >
          <Row className="d-flex justify-content-center align-items-center bg-white shadow rounded-5 p-3 p-xl-0">
            <Col
              xl={5}
              md={6}
              className={`h-100 d-flex justify-content-center align-items-center`}
            >
              <Col
                className={`d-flex justify-content-center align-items-center d-none d-md-block`}
              >
                <Image
                  src={login_img}
                  className="rounded-5 w-100 "
                  height={"300px"}
                ></Image>
              </Col>
            </Col>
            <Col xl={6} md={6} className={``}>
              <Col className={`pt-4 pb-4`}>
                <Form
                  className={`w-100 border p-2`}
                  noValidate
                  validated={validated}
                  onSubmit={handleSubmit}
                >
                  <Row className={`gap-4 p-3`}>
                    <h2
                      className={`m-0 p-0 `}
                      style={{
                        color: "#343C6A",
                        fontFamily: "poppings-SemiBold",
                      }}
                    >
                      welcome
                    </h2>
                    <Form.Group className={`p-0`}>
                      <Form.Label
                        className={``}
                        style={{
                          fontSize: "15px",
                          fontFamily: "poppings-regular",
                        }}
                      >
                        Email or Phone number{" "}
                        <span className={"text-danger"}>*</span>
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder={`Enter Your Email or Phone`}
                      />
                      <Form.Control.Feedback type={`invalid`}>
                        required field
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className={`p-0`}>
                      <Form.Label
                        style={{ fontSize: "15px" }}
                        className={`p-0`}
                      >
                        Password <span className={"text-danger"}>*</span>
                      </Form.Label>
                      <Form.Control
                        required
                        type={`Password`}
                        placeholder={`Enter Your Password`}
                      />
                      <Form.Control.Feedback type={`invalid`}>
                        Password required field
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="p-0 ">
                      <Form.Label style={{ fontSize: "15px" }}>
                        Select School <span className="text-danger">*</span>
                      </Form.Label>
                      <Dropdown className="bg-transparent">
                        <Dropdown.Toggle className="bg-transparent border text-secondary w-100 d-flex align-items-center justify-content-between">
                          {selectedSchool}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          {loading && <Dropdown.Item>Loading...</Dropdown.Item>}
                          {error && (
                            <Dropdown.Item>Error loading schools</Dropdown.Item>
                          )}
                          {!loading &&
                            schools.map((school) => (
                              <Dropdown.Item
                                key={school.school_id}
                                eventKey={school.school_id}
                                onClick={() => handleSelect(school.school_id)}
                                className="d-flex align-items-center"
                                style={{ width: "100%" }}
                              >
                                <img
                                  src={school.logo_url}
                                  alt={school.short_name}
                                  style={{
                                    width: "30px",
                                    height: "30px",
                                    marginRight: "10px",
                                  }}
                                />
                                {school.name}
                              </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                      </Dropdown>
                      <Form.Control.Feedback type="invalid">
                        School is a required field.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <div
                      className={`d-flex align-items-center justify-content-between`}
                    >
                      <Button
                        className={`w-50 border-0 ps-3 pe-3`}
                        type="submit"
                        style={{
                          backgroundColor: "#A131A4",
                        }}
                      >
                        Sign in
                      </Button>

                      <a
                        className="m-0 "
                        href={`#`}
                        style={{ fontSize: "15px" }}
                      >
                        forget password?
                      </a>
                    </div>
                  </Row>
                </Form>
              </Col>
            </Col>
          </Row>
        </Col>
      </Container>
    </>
  );
};

export default LoginForm;
