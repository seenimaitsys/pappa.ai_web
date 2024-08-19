import { Container, Navbar } from "react-bootstrap";
import logo from "../../assets/images/pappa.png";
import LoginForm from "../../components/LoginForm";

function LoginLayout() {
  return (
    <>
      <Container fluid className={`d-flex p-0 h-100`}>
        <div className="w-100 bg-app-bg h-100">
          <Navbar className={`bg-body-tertiary`}>
            <Container fluid className={`d-flex ps-5 align-items-center`}>
              <Navbar.Brand className={` d-flex gap-2 ps-5 align-items-center`}>
                <h1 className={`fw-bold m-0 `} style={{ fontSize: "25px" }}>
                  Pappa.Ai
                </h1>
                <img
                  alt=""
                  src={logo}
                  width="45px"
                  height="45px"
                  className={`d-inline-block align-top `}
                />
              </Navbar.Brand>
            </Container>
          </Navbar>
          <div className={`wrapper p-0`}>
            <LoginForm />
          </div>
        </div>
      </Container>
    </>
  );
}

export default LoginLayout;
