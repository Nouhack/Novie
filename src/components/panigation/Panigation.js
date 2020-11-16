import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link, withRouter, useHistory } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import Pagination from 'react-bootstrap-4-pagination';
import { red } from '@material-ui/core/colors';


export default withRouter(function Panigation(props) {
    const [state, setstate] = useState(Number(props.searchPage))
    console.log('hada haw search page ', props.searchPage)

    let paginationConfig = {
        totalPages: Math.ceil(Number(props.results_Number) / 10),
        currentPage: state,
        showMax: 1,
        size: "",
        threeDots: true,
        prevNext: true,

        onClick: function (page) {
            setstate(page)
            props.history.push(`/Search/${props.SearchType}/${props.Search_Title}/${page}`)
        },


        //     borderColor: 'red',
        activeBorderColor: 'black',
        activeBgColor: '#11998ea2',
        //    disabledBgColor: 'red',
        activeColor: 'white',
        color: '#11998e',
        // disabledColor: 'green',

        circle: false,
        shadow: false
    };
    // history.push(`/Search/${props.Search_Title}/${page}`)
    console.log('NCHOUFOU L PROPS', props)
    return (
        <Pagination  {...paginationConfig} />
    )

}
)