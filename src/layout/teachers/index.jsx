import { Col, Pagination, Row } from "react-bootstrap";
import TeacherCard from "../../components/TeacherCard";

import SearchInput from "../../components/Scarch";

const TeachersLayout = () => {
  return (
    <>
      <Row className={`h-100 `}>
        <Col
          xl={8}
          className={`d-flex flex-column align-items-center justify-content-evenly `}
        >
          <Row
            className={`w-100 d-flex  align-items-center justify-content-center  justify-content-xl-start `}
          >
            <Col xl={4} lg={4} xs={9} className={`mt-2 mb-2`}>
              <SearchInput />
            </Col>
          </Row>

          <Row
            className={`d-flex align-items-center justify-content-center w-100`}
          >
            {Array.from({ length: 8 }).map((_, idx) => (
              <TeacherCard key={idx} />
            ))}
          </Row>
          <Row
            className={`w-100 d-flex align-items-center justify-content-center justify-content-lg-end`}
          >
            <Col
              className={`p-3 p-lg-0 w-100 d-flex align-items-center justify-content-center justify-content-lg-end`}
            >
              <Pagination className={`m-0`}>
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Ellipsis />

                <Pagination.Item>{10}</Pagination.Item>

                <Pagination.Item active>{11}</Pagination.Item>

                <Pagination.Ellipsis />
                <Pagination.Item>{20}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
              </Pagination>
            </Col>
          </Row>
        </Col>
        <Col className={``}>
          <div
            style={{ height: "100%" }}
            className={`w-100 d-flex  align-items-center justify-content-center p-3 `}
          >
            <div
              style={{ height: "500px" }}
              className={`w-100 shadow rounded-4 bg-white border`}
            >
              <h1>Hi</h1>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default TeachersLayout;
