import React from 'react';
import {Pagination} from 'react-bootstrap';
import  { LinkContainer } from 'react-router-bootstrap'

const Paginate = ({ pages, page, isAdmin=false, keyword="", route = "/admin/productlist/" }) => {
    return (pages >1) ? <Pagination>
        { [ ...Array(pages).keys()].map(x=>{
            return <LinkContainer key={x+1} to={ `${route}${x+1}` }  >
                <Pagination.Item active={x+1===page} >{x+1}</Pagination.Item>
            </LinkContainer>
        }) }
    </Pagination> : null
}

export default Paginate;