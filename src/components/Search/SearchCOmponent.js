import React, { Component, useState } from 'react'
import './Search.css'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Choose from '../ChooseComponent/Choose'

export default function SearchCOmponent() {
    const [inputValue, setinputValue] = useState("")
    const [type, settype] = useState("movie")
    console.log('hadi hya ty khou', type)
    return (
        <>


            <Choose setTy={settype} />
            <div className="form__group field ">

                <input type="text" className="form__field" placeholder="Name Movie or Serie" value={inputValue} onChange={(e) => setinputValue(e.target.value)} name="name" id='name' required />
                <label htmlFor="name" className="form__label">Search Movie or Serie</label>
                <Link to={"Search/" + type + "/" + inputValue + "/" + 1} >
                    <Button className='shadow-none w-100 mt-md-2 mt-2' style={{ background: 'linear-gradient(45deg, rgb(21, 20, 20), transparent)', border: "none" }} > SEARCH ... </Button>
                </Link>
            </div>
        </>
    )
}


/*
Here is your key: fa3e154a

Please append it to all of your API requests,

OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=fa3e154a

Click the following URL to activate your key: http://www.omdbapi.com/apikey.aspx?VERIFYKEY=94be6a4a-c2c3-4d41-a502-c5a3fa6eb744
If you did not make this request, please disregard this email.
*/
