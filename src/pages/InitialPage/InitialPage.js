import React, { Component } from 'react'
import { Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css'
import SearchComponent from '../../components/Search/SearchCOmponent'


export default function InitialPage() {
    return (
        <Row className="  justify-content-center align-items-center justify-content-md-center pb-md-5 " style={{ minHeight: "85vh", background: 'linear-gradient(45deg, #151414, transparent)' }}>


            <Col xs={8} md={6} lg={4} className=''>
                <SearchComponent />
            </Col>





        </Row>
    )
}
