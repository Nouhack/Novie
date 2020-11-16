import React from 'react'
import { Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import DisplayDetais from '../../components/displayDetails/details'
export default function DetailsPage() {
    return (
        <Row className=" " style={{ minHeight: "85%", background: 'linear-gradient(45deg, #151414, transparent)' }}>


            <Col className="">
                <DisplayDetais />
            </Col>


        </Row>
    )
}
