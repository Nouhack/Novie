import React, { Component, useEffect, useState } from 'react'
import { Row, Col, Card, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Movie from './Movie/Movie'
import axios from 'axios'
import LoadingComp from '../Loading/Loading'
import Pagination from '../panigation/Panigation'
import NotFound from '../NotFound/NotFound'

export default function DisplayMovies({ Search_Title, Search_Page, Search_type }) {
    const [DATA, setsDATA] = useState([])
    const [number, setnumber] = useState(0)
    const [Loading, setLoading] = useState(false)

    useEffect(() => {
        axios.get(`https://www.omdbapi.com/?apikey=fa3e154a&s=${Search_Title}&page=${Search_Page}&type=${Search_type}`)
            .then(res => {
                setsDATA(res.data.Search)
                setnumber(res.data.totalResults)
                setLoading(true)
            })
        return () => {
            setLoading(false)
        }

    }, [Search_Title, Search_Page])





    let items = null
    /*
        for (let index = 0; index < 10; index++) {
            items.push(<Col sm={6} md={4} lg={3} className="mb-5 mb-md-5"> <Movie /> </Col>)
    
        }
        <Movie Title={item.Title} Image={item.Poster} />
        */

    try {
        items = DATA.map((item, index) => {
            return <Col sm={6} md={4} lg={3} className=""> <Movie Title={item.Title} Image={item.Poster} Type={item.Type} id={item.imdbID} All_Data={item} /> </Col>
        })
    } catch (error) {
        console.log('ERROR')
    }


    const con = (
        <>

            {items}
            <div className='w-100'></div>
            <br />
            <Col xs={6} md={4} className='m-auto '> <Pagination Search_Title={Search_Title} results_Number={number} searchPage={Search_Page} SearchType={Search_type} /> </Col>

        </>
    )
    return (
        <Row className='justify-content-center h-100'>

            {Loading ? DATA ? con : <NotFound /> : <LoadingComp />}


        </Row>
    )
}
