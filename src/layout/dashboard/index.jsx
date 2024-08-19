import SchoolEvents from "../../components/SchoolEvents";
import Gredes from "../../components/Grades";
import { Row } from "react-bootstrap";
const DashboardLayout = () => {
  return (
    <>
      <Row className={`d-flex align-items-center justify-content-center h-100`}>
        <Row className={` gap-4 pt-4 pt-xl-0 pb-4 pb-xl-0`}>
          <Gredes />

          <SchoolEvents />
        </Row>
      </Row>
    </>
  );
};

export default DashboardLayout;
