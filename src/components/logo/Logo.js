import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './logo.css'
import { Link } from 'react-router-dom'


export default function Logo() {
    return (
        <>
            <Row style={{ height: "15%", background: "linear-gradient(45deg, #151414, transparent)" }} className='text-left' >
                <Col md={4} className='align-self-center pt-md-3 pl-md-5 pt-2 pl-4'>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <h3 className="Logo">Novie</h3>
                    </Link>
                </Col>
            </Row>
        </>
    )
}
