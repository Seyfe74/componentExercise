import React from 'react';
import './SuperHeroTable.css';


const SuperHeroTable = (props) => {
    return(
    props.displayTable.map(hero => {

    return(
       
    <React.Fragment>
    <table>
       <tr>       
        <th>superheroId   </th>
        <th>name   </th>
        <th>primaryAbility   </th>
        <th>secondarAbility   </th>      
       
    </tr>                
          <tr>      
                    <td>{hero.superheroId}</td> 
                    <td>{hero.name}   </td>  
                    <td>{hero.primaryAbility}   </td>  
                    <td>{hero.secondarAbility}   </td> 
                                      
                   </tr>
                   
    </table>   
    </React.Fragment>
           
    )} )
    ); 
}
export default SuperHeroTable;