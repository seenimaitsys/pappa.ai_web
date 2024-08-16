import { Button, Col, Image } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import teacherIcon from "../../assets/images/teachers.png";
import studentIcon from "../../assets/images/students.png";
const Gredes = () => {
  return (
    <>
      <Col className={`d-flex flex-column gap-4 `} lg={12} xl={6}>
        <Col className={`bg-white d-flex border rounded-18 shadow`}>
          <Col
            className={`d-flex flex-column flex-lg-row align-items-center justify-content-center gap-2 gap-lg-4 p-3`}
          >
            <Image
              src={studentIcon}
              width={`85px`}
              height={`85px`}
              alt={`students`}
            ></Image>
            <div
              className={`d-flex flex-column align-items-center justify-content-center`}
            >
              <p className={`fs-6 m-0`} style={{ color: "#A098AE" }}>
                Students
              </p>
              <h6 className={`fs-2 m-0 fw-bold`} style={{ color: "#303972" }}>
                132
              </h6>
            </div>
          </Col>
          <Col
            className={`d-flex flex-column flex-lg-row align-items-center justify-content-center gap-2 gap-lg-4 p-3`}
          >
            <Image
              src={teacherIcon}
              width={`85px`}
              height={`85px`}
              alt={`students`}
            ></Image>
            <div
              className={`d-flex flex-column align-items-center justify-content-center`}
            >
              <p className={`fs-6 m-0`} style={{ color: "#A098AE" }}>
                Teacher
              </p>
              <h6 className={`fs-2 m-0 fw-bold`} style={{ color: "#303972" }}>
                40
              </h6>
            </div>
          </Col>
        </Col>
        <Col className={`bg-white border rounded-18 shadow p-3`}>
          <div className={`d-flex gap-2`} style={{ height: "230px" }}>
            <div className={`w-50 overflow-auto custom_scrollbar `}>
              {["lkg1", "greate 2", "greate 3"].map((value, index) => {
                return (
                  <h3
                    key={index}
                    className={`border-bottom text-center p-1 cursor-pointer border-end hover-grade`}
                    style={{
                      color: "#303972",
                      fontFamily: "poppings-bold",
                    }}
                  >
                    {value}
                  </h3>
                );
              })}
            </div>
            <div className={`w-50 overflow-auto custom_scrollbar`}>
              {["lkg1", "greate 2", "greate 3"].map((value, index) => {
                return (
                  <h3
                    key={index}
                    className={`border-bottom text-center p-1 cursor-pointer`}
                    style={{
                      color: "#303972",
                      fontFamily: "poppings-bold",
                    }}
                  >
                    {value}
                  </h3>
                );
              })}
            </div>
          </div>
          <div
            style={{ height: "160px" }}
            className={`d-flex border rounded-18 shadow mt-4  `}
          >
            <div
              className={`w-50 d-flex  flex-column align-items-center justify-content-center gap-4`}
            >
              <div className={`d-flex   gap-0  gap-md-4 `}>
                <div className={``}>
                  <h4
                    style={{ fontFamily: "poppings-bold" }}
                    className={`m-0 fs-4 text-purple-100`}
                  >
                    Sethu
                  </h4>
                  <p
                    className={`m-0`}
                    style={{
                      fontSize: "12px",
                      color: "#444C82",
                      fontFamily: "poppings-bold",
                    }}
                  >
                    Primary Teacher
                  </p>
                </div>
                <FaRegEdit className={`fs-5 text-purple-100`} />
              </div>
              <div className={`d-flex  gap-0  gap-md-4 `}>
                <div className={``}>
                  <h4
                    style={{ fontFamily: "poppings-bold" }}
                    className={`m-0 fs-4 text-purple-100`}
                  >
                    Sethu
                  </h4>
                  <p
                    className={`m-0`}
                    style={{
                      fontSize: "12px",
                      color: "#444C82",
                      fontFamily: "poppings-bold",
                    }}
                  >
                    Primary Teacher
                  </p>
                </div>
                <FaRegEdit className={`fs-5 text-purple-100`} />
              </div>
            </div>
            <div
              className={`w-50 d-flex  flex-column align-items-center justify-content-center`}
            >
              <h2 className={`fs-3`} style={{ fontFamily: "poppings-bold" }}>
                PREK
              </h2>
              <h2>Section B</h2>
              <Button className={`border-0 bg-purple-100`}>
                View Students
              </Button>
            </div>
          </div>
        </Col>
      </Col>
    </>
  );
};

export default Gredes;
