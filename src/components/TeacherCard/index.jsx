import { Card, Col } from "react-bootstrap";
import { LuMail } from "react-icons/lu";

const TeacherCard = () => {
  return (
    <Col xl={3} lg={5} sm={3} xs={10} className={`p-2`}>
      <Card className={`border-0 rounded-4 shadow-sm w-100 bg-white`} draggable>
        <Card.Body
          className={`d-flex flex-column gap-1 align-items-center justify-content-center`}
          style={{ fontWeight: "700" }}
        >
          <p className=" p-0 m-0 fs-5" style={{ color: "#303972" }}>
            Sethu
          </p>
          <p
            className=" p-0 m-0"
            style={{ color: "#444C82", fontSize: "15px" }}
          >
            Primary Teacher
          </p>
          <p className=" p-0 m-0 " style={{ color: "#A131A4" }}>
            KG1 <span style={{ color: "#FB7D5B" }}>Section A</span>
          </p>
          <p
            className=" p-0 m-0 "
            style={{ color: "#444C82", fontSize: "15px" }}
          >
            Secondary Teacher
          </p>
          <p className=" p-0 m-0" style={{ color: "#A131A4" }}>
            KG2 <span style={{ color: "#FB7D5B" }}>Section B</span>
          </p>
          <LuMail
            className=" text-white p-2 rounded-5"
            style={{
              backgroundColor: "#A131A4",
              width: "35px",
              height: "35px",
            }}
          />
        </Card.Body>
      </Card>
    </Col>
  );
};

export default TeacherCard;
