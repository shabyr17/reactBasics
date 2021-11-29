import React from "react";
import './card-list.styles.css';

import Card from "../card/card.component";
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";

function CardList(props) {
    return (<>
        <div className="card-list">
        <Row>
            {props.employees.length > 0 ? props.employees.map(employee => (<Col sm={6}><Card key={employee.id} employee={employee} /></Col>)): <div className='box'> <div className="no-results">No results found</div></div>}
        </Row>
        </div>
        </>)
}

export default CardList;