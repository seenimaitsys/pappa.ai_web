import { Button, Card, Col } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import image1 from "../../assets/images/image1.png";

const SchoolEvents = () => {
  return (
    <>
      <Col className={``}>
        <div
          style={{ height: "590px" }}
          className={`bg-white border rounded-18 shadow d-flex  flex-column align-items-center`}
        >
          <div
            className={`w-100 p-3 d-flex align-items-center justify-content-between`}
          >
            <h3 style={{ color: "#303972", fontFamily: "poppings-bold" }}>
              Events
            </h3>
            <Button className={`bg-purple-100 border-0 gap-2`}>
              <FiPlus />
              Event
            </Button>
          </div>
          <div
            className={`w-100 d-flex flex-column align-items-center overflow-auto custom_scrollbar gap-4`}
          >
            <Card style={{ width: "70%", position: "relative" }}>
              <div style={{ position: "relative" }}>
                <Card.Img variant="top" height={"230px"} src={image1} />
                <FaEdit
                  style={{
                    position: "absolute",
                    top: "10px",
                    fontSize: "20px",
                    right: "10px",
                    cursor: "pointer",
                    color: "white",
                  }}
                />
              </div>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Col>
    </>
  );
};

export default SchoolEvents;
