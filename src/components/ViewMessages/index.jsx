import { Col, Pagination, Row } from "react-bootstrap";

const ViewMessage = () => {
  return (
    <>
      <Row className={`h-100 shadow rounded-4 bg-white border`}>
        <Col xl={8} className={`w-100 h-100`}>
          {[1, 2, 3, 4, 5, 7, 9].map((value, index) => {
            return (
              <div
                className={`w-100 bg-white pt-2 ps-4 pe-3 border-bottom`}
                key={index}
              >
                <div
                  className={`w-100 d-flex align-items-center justify-content-between`}
                >
                  <h6
                    style={{ color: "#303972" }}
                    className={`fw-semibold fs-6 m-0`}
                  >
                    SeeniVasan
                  </h6>
                  <p
                    className={`fw-normal text-muted m-0`}
                    style={{ fontSize: "14px" }}
                  >
                    JULY 25 12:45 PM
                  </p>
                </div>
                <p
                  className={`fw-normal text-muted `}
                  style={{ fontSize: "14px" }}
                >
                  MESSmkldckjhjkchckjzcnzcm,znckzckzc
                </p>
              </div>
            );
          })}
          <Col
            className={`w-100 d-flex align-items-center justify-content-center justify-content-lg-end p-3`}
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
        </Col>
      </Row>
    </>
  );
};

export default ViewMessage;
