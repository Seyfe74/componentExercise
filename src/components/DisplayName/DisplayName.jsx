import React from 'react';
import './DisplayName.css';


const DisplayName = (props) => {
    return(
        <div >
            
        <h1>First Name: {props.display.firstName}</h1>
        <h1>Last Name: {props.display.lastName}</h1>
        
        </div>
    
            
    );     
}
export default DisplayName;