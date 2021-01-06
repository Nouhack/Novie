import React from "react";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import DisplayDetais from "../../components/displayDetails/details";
export default function DetailsPage() {
  return (
    <Row
      style={{
        minHeight: "85vh",
        background: "linear-gradient(45deg, #151414, transparent)",
      }}
    >
      <Col>
        <DisplayDetais />
      </Col>
    </Row>
  );
}
