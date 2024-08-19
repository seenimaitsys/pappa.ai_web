import { Button, Card, Col } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import image1 from "../../assets/images/image1.png";

const SchoolEvents = () => {
  return (
    <>
      <Col className={``}>
        <div
          className={`bg-white border rounded-18 shadow d-flex  flex-column align-items-center h-100
            `}
        >
          <div
            className={`w-100 d-flex flex-column align-items-center overflow-auto custom_scrollbar gap-3 gap-xl-4 pb-3`}
            style={{ height: "570px" }}
          >
            <div
              className={` pt-3 d-flex align-items-center justify-content-between`}
              style={{ width: "80%" }}
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
              style={{ width: "80%" }}
              className={`overflow-auto custom_scrollbar d-flex flex-column gap-4 pe-1`}
            >
              {[1, 2].map((value, index) => {
                return (
                  <Card className={`w-100`} key={index}>
                    <div>
                      <Card.Img
                        variant="top"
                        height={"230px"}
                        src={image1}
                        alt={""}
                      />
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
                        Some quick example text to build on the card title and
                        make up the bulk of the cards content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </Col>
    </>
  );
};

export default SchoolEvents;
