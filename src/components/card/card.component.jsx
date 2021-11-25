import React from "react";
import './card.styles.css';

function Card(props) {
    return(<div className='card-container'>
        <div className='card'>
        <img alt={props.employee.name} src ={props.employee.image} />
        <h2>
            {props.employee.name}
        </h2>
        </div>
        
        <div className="card-details">
            <img alt={props.employee.name} src ={props.employee.image} width="150" height="150" />
            <h4>
            Name: {props.employee.name} <br/>
            Nick Name: {props.employee.username} <br/>
            Email: {props.employee.email} <br/>
            Address: {props.employee.address.suite}, {props.employee.address.street},
            <br/>  {props.employee.address.city}, {props.employee.address.zipcode}<br/>
            Coordinates: {props.employee.address.geo.lat}, {props.employee.address.geo.lng} <br/>
            Phone: {props.employee.phone} <br/>
            Website: {props.employee.website} <br/>
            Comapny: {props.employee.company.name} <br/>
            </h4>

        </div>
    </div>)
}

export default Card;