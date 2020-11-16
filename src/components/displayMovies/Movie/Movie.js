import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Movie.css'
import { Link } from 'react-router-dom'

export default function Movie(props) {

    return (
        <>
            <Link to={{
                pathname: `/Search/${props.Type}/${props.id}`,
                //Title: props.Title
            }} style={{ textDecoration: 'none' }}>
                <Card className="img__wrap" style={{ height: "90%" }} >

                    <Card.Img className="fibben" alt="Card image cap" style={{ height: '100%', objectFit: "cover" }} variant="top" src={props.Image == "N/A" ? ` https://fakeimg.pl/300x450/131211/11998e/?text=NO IMAGE` : props.Image} />

                    <p className="img__description ">{props.Title}</p>



                </Card>
            </Link>
        </>

    )
}
