import { useDispatch } from "react-redux";
import { ShowMenu } from "../../redux/menu/menuSlice";
import { Col, Container, Image, Navbar } from "react-bootstrap";

import { FaUserCircle } from "react-icons/fa";

import { CgMenuRound } from "react-icons/cg";
import schoollogo from "../../assets/images/logoweb.png";
const AppHeader = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Navbar
        className="d-flex align-items-center p-0"
        style={{ height: "90px" }}
      >
        <Container
          fluid
          className={`d-flex  flex-column align-items-center justify-content-between pt-3 pb-3`}
        >
          <Col
            xs={12}
            className={`w-100 d-flex align-items-center  justify-content-center  justify-content-xl-start gap-3 gap-md-2`}
          >
            <Image
              src={schoollogo}
              alt={"logo"}
              width={"65px"}
              height={"65px"}
              className={`d-none d-lg-block`}
            ></Image>
            <CgMenuRound
              className={`cursor-pointer d-block d-xl-none  d-lg-none`}
              onClick={() => dispatch(ShowMenu())}
              style={{ width: "40px", height: "40px" }}
            />
            <div
              className={`d-flex  flex-column align-items-start justify-content-between`}
            >
              <h2
                className={`p-0 m-0 fs-5`}
                style={{
                  color: "black",
                  fontWeight: "700",
                }}
              >
                Acton Tamil School
              </h2>
              <Col className={` d-flex  align-items-center `}>
                <h2
                  className={`m-0  fs-5`}
                  style={{
                    color: `#303972`,
                  }}
                >
                  Dashboard
                </h2>
              </Col>
            </div>
            <Col
              className={` d-flex align-items-center justify-content-end gap-3 me-0 me-xl-4`}
            >
              <div>
                <h4
                  style={{ color: "#A131A4", fontSize: "18px" }}
                  className={`m-0 text-center`}
                >
                  Rithish
                </h4>
                <h4
                  style={{ color: "#A098AE", fontSize: "14px" }}
                  className={`m-0 text-center pt-2`}
                >
                  Admin
                </h4>
              </div>
              <FaUserCircle style={{ width: "45px", height: "45px" }} />
            </Col>
          </Col>
        </Container>
      </Navbar>
    </>
  );
};

export default AppHeader;
