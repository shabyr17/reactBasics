import React from "react";
import './search-bar.style.css';

export default function SearchBar(props){
    return(<div class="box">
    <input 
          type='search' 
          className="search" 
          placeholder="Search" 
          onChange= {props.onChange}
    />
   </div>)
}