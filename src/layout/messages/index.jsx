import { Col, Row } from "react-bootstrap";
import ViewMessage from "../../components/ViewMessages";
import SendMessageForm from "../../components/SendMessageForm";

const MessagesLayout = () => {
  return (
    <>
      <Row className={`h-100 gap-5 p-3`}>
        <Col xl={8}>
          <ViewMessage />
        </Col>
        <Col className={`d-flex align-items-center justify-content-center`}>
          <SendMessageForm />
        </Col>
      </Row>
    </>
  );
};

export default MessagesLayout;
