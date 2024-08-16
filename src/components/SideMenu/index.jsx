import { Offcanvas, Navbar, Image, Col, Nav, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { hideMenu } from "../../redux/menu/menuSlice";
import logo from "../../assets/images/pappa.png";
import { Link, useLocation } from "react-router-dom";
import { dynamic_MenuData } from "./dynamic_Menu";
// import { UseGetScreenResolution } from "../../components/GetScreenResolution";
const SideMenu = () => {
  // path check to apply bg-color in sidenemu
  const location = useLocation();
  const path = location.pathname;
  const checkpath = (pathMatch) => {
    return path === pathMatch;
  };
  ///get sidemune hide or show value
  const showmenubar = useSelector((state) => state.show.sidebarShow);
  const dispatch = useDispatch();
  // const [currentResolution] = UseGetScreenResolution();

  return (
    <>
      <Navbar
        expand={`lg`}
        className={`d-flex d-none d-xl-block d-lg-block h-100`}
        style={{
          backgroundColor: "#A131A4",
        }}
      >
        <div
          className={`w-100 d-flex align-items-center justify-content-center gap-2 mt-3 `}
          style={{ height: "85px" }}
        >
          <Image
            src={logo}
            alt={"logo"}
            width={"50px"}
            height={"50px"}
            style={{ color: "red" }}
          ></Image>
          <h2
            className={`p-0 m-0`}
            style={{
              fontSize: "26px",
              fontWeight: "500",
              color: "white",
            }}
          >
            Pappa.ai
          </h2>
        </div>

        <Navbar.Offcanvas
          placement={`start`}
          backdrop={true}
          show={showmenubar}
          onHide={() => dispatch(hideMenu())}
          style={{ backgroundColor: "#A131A4" }}
          className={`w-75  `}
        >
          {/* Offcanvas header with brand logo */}
          <Offcanvas.Header closeButton>
            <div
              className={`w-100 d-flex align-items-center justify-content-center gap-2 mt-3 `}
              style={{ height: "85px" }}
            >
              <Image
                src={logo}
                alt={"logo"}
                width={"50px"}
                height={"50px"}
                style={{ color: "red" }}
              ></Image>
              <h2
                className={`p-0 m-0`}
                style={{
                  fontSize: "26px",
                  fontWeight: "500",
                  color: "white",
                }}
              >
                Pappa.ai
              </h2>
            </div>
          </Offcanvas.Header>
          {/* Offcanvas body with navigation links */}
          <Offcanvas.Body
            className={`d-flex flex-column d-flex align-items-center justify-content-between w-100   p-0 `}
          >
            <Nav
              className={`d-flex flex-column w-100 h-100 align-items-center gap-2 p-0 mt-4 `}
            >
              {dynamic_MenuData.map((value, index) => {
                return (
                  <Col
                    className={`w-100 h-100 d-flex align-items-center justify-content-center `}
                    key={index}
                  >
                    <Link
                      to={value.path}
                      style={{
                        width: "fit-content",
                      }}
                      className={`${
                        checkpath(value.path) && "activepath "
                      }  lik ms-5 p-2 w-100 text-nowrap text-decoration-none d-flex align-items-center justify-content-start   gap-3  text-white letterSpacing-1`}
                    >
                      {value.icon}
                      <h4 className={`p-0 m-0`} style={{ fontSize: "20px" }}>
                        {value.title}
                      </h4>
                    </Link>
                  </Col>
                );
              })}
            </Nav>
            <Button
              variant="light"
              className="ps-4 pe-4 mt-6 mb-2 w-50 text-center"
              style={{
                fontSize: "20px",
                fontWeight: "600",
                color: "#A131A4",
              }}
            >
              LOGOUT
            </Button>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>
    </>
  );
};

export default SideMenu;
