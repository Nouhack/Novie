import React, { useState } from 'react'
import './Choose.css'
import { Row, Col } from 'react-bootstrap'
export default function Choose(props) {

    const [button1, setbutton1] = useState(() => true)
    const [button2, setbutton2] = useState(() => false)
    const [type, settype] = useState(() => "movie")

    const func1 = () => {
        setbutton1(true)
        setbutton2(false)
        { props.setTy('movie') }
    }

    const func2 = () => {
        setbutton1(false)
        setbutton2(true)
        { props.setTy('series') }
    }
    return (

        <div >
            <Row className='no-gutters'>
                <Col xs={6} md={6} className="">
                    <button className="btlChoose" onClick={() => func1()} style={button1 ? { backgroundColor: '#11998e', color: "white", borderRadius: "3px" } : null}>Movies</button>
                </Col>
                <Col xs={6} md={6} className="">
                    <button className="btlChoose" onClick={() => func2()} style={button2 ? { backgroundColor: '#11998e', color: "white", borderRadius: "3px" } : null} >Series</button>
                </Col>

            </Row>



        </div>









    )
}
