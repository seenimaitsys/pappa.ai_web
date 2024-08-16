import { Container, Row } from "react-bootstrap";

import SchoolEvents from "../../components/SchoolEvents";
import Gredes from "../../components/Grades";
const DashboardLayout = () => {
  return (
    <>
      <Container fluid>
        <Row className={`p-1 ps-md-5 pe-md-5 gap-4`}>
          <Gredes />

          <SchoolEvents />
        </Row>
      </Container>
    </>
  );
};

export default DashboardLayout;
