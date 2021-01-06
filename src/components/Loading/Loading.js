import React from "react";
import "./loading.css";
import { Row, Col } from "react-bootstrap";

export default function Loading() {
  return (
    <Row
      className="justify-content-center align-items-center justify-content-md-center "
      style={{ height: "100%" }}
    >
      <Col>
        <div className="spinner">
          <div className="bounce1"></div>
          <div className="bounce2"></div>
          <div className="bounce3"></div>
        </div>
      </Col>
    </Row>
  );
}
