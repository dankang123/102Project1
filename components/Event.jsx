import React from "react";
import { Link } from 'react-router-dom';

const Event = (props) => {
    return (
        <td className={'Event'}>
            <img src={props.image}></img>
            <h5>{props.name}</h5>
            <a href={props.link}>
                <button>{props.description}</button>    
            </a>    
        </td>


    )
}


export default Event;