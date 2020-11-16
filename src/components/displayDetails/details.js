import React, { useEffect, useState } from 'react'
import './details.css'
import { Row, Col } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import axios from "axios"
import LoadingPage from '../Loading/Loading'
import NotFound from '../NotFound/NotFound'

export default withRouter(function Details(props) {

    const [DetailData, setDetailData] = useState([])
    const [Loading, setLoading] = useState(false)

    useEffect(() => {


        axios.get(`http://www.omdbapi.com/?apikey=fa3e154a&i=${props.match.params.imdbid}`)
            .then(res => {
                setDetailData(res.data)
                setLoading(true)
            })
        return () => {
            setLoading(false)
        }


    }, [])



    return (
        <>
            {Loading ? DetailData.Title ? (
                <Row className="h-100 ">
                    <>
                        <Col xs={12} md={6} lg={4} className=" align-self-center mt-3" >
                            <img src={DetailData.Poster == "N/A" ? ` https://fakeimg.pl/300x450/131211/11998e/?text=NO IMAGE` : DetailData.Poster} style={{ border: "2px solid #11998e" }}></img>
                        </Col>
                        <Col xs={12} md={6} lg={8} className="align-self-center text-left mt-4">
                            <ul className="list">

                                <h5>Title :  {DetailData.Title}</h5>
                                <h5>Year : {DetailData.Year}</h5>
                                <h5>Rated : {DetailData.Rated}</h5>
                                <h5>Released : {DetailData.Released}</h5>
                                <h5>Runtime : {DetailData.Runtime}</h5>
                                <h5>Genre : {DetailData.Genre}</h5>
                                <h5>Description : {DetailData.Plot}</h5>
                                <h5>Director : {DetailData.Director}</h5>
                                <h5>Writer : {DetailData.Writer}</h5>
                                <h5>Actors : {DetailData.Actors}</h5>
                                <h5>Language : {DetailData.Language}</h5>
                                <h5>Country : {DetailData.Country}</h5>
                                <h5>Awards : {DetailData.Awards}</h5>
                                <h5>Type : {DetailData.Type}</h5>
                                <h5>Ratings :</h5>
                                <ul>

                                    {DetailData.Ratings.map(item => {
                                        return <h5> {item["Source"]} : {item["Value"]}</h5>
                                    })}
                                </ul>


                                <h5>imdb Rating :{DetailData.imdbRating}</h5>
                                <h5>imdb Votes :{DetailData.imdbVotes}</h5>
                                {DetailData.Type === "series" ? <h5>Total Seasons : {DetailData.totalSeasons}</h5> : null}

                            </ul>


                        </Col></> </Row >) : <NotFound /> : <LoadingPage />}
        </>

    )
})
