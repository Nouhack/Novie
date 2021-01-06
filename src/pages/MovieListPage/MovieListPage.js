import React, { Component, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import DisplayMovies from "../../components/displayMovies/DisplayMovies";

export default function MovieListPage(props) {
  /*
    useEffect(() => {
        console.log(props.match.params.title)

    }, [])*/
  return (
    <Row
      style={{
        minHeight: "85vh",
        background: "linear-gradient(45deg, #151414, transparent)",
      }}
    >
      <Col className="mt-5 mt-md-5">
        <DisplayMovies
          Search_Title={props.match.params.title}
          Search_Page={props.match.params.page}
          Search_type={props.match.params.type}
        />
      </Col>
    </Row>
  );
}
