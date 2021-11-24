import React from "react";
import './card-list.styles.css';

import Card from "../card/card.component";

function CardList(props) {
    return (
        <div className='card-list'>
            {props.employees.length > 0 ? props.employees.map(employee => (<Card key={employee.id} employee={employee} />)): <div className='box'> <div className="no-results">No results found</div></div>}
            
        </div>)
}

export default CardList;