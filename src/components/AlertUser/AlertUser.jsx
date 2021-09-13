import React from 'react';
import './AlertUser.css';


const AlertUser = (props) => {
    return(
      
        <h2>
        <button onClick={() => { alert('devCodeCamp') }} > Click me </button></h2>
            
    );     
}
export default AlertUser;