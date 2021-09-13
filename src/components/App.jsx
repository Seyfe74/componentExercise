import React, {Component} from 'react';
import './App.css';
import DisplayName from './DisplayName/DisplayName';
import NameList from './NameList/NameList';
import AlertUser from './AlertUser/AlertUser';
import SuperHeroTable from './SuperHeroTable/SuperHeroTable';
import SuperheroCreateForm from './SuperheroCreateForm/SuperheroCreateForm';

class App extends Component {
    constructor(props){
        super(props);

       
        this.state= {
            forDisplay: {firstName: 'Reggie', lastName: 'White'},
            names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly'],
            display:[],
            superheroes : [
                {
                    superheroId: 1,
                    name: 'Batman',
                    primaryAbility: 'Wealthy',
                    secondarAbility: 'Rich'
                },
                {
                    superheroId: 2,
                    name: 'Superman',
                    primaryAbility: 'Super strength',
                    secondarAbility: 'Fly'
                },
                {
                    superheroId: 3,
                    name: 'Spiderman',
                    primaryAbility: 'Spider senses',
                    secondarAbility: 'Shoots web'
                }
            ],
            displayTable :[]
            
        }               
    }
    
    alertFunction = ( ) => {   
           let alert= <button onClick={() => { alert('devCodeCamp') }} > Click me </button>; 
           return alert;
      }
 
    render() {
        return(
            <div>
                 
                <DisplayName display = {this.state.forDisplay}  />
                <NameList display = {this.state.names}  />
                <AlertUser  alert = {this.alertFunction}/>
                <SuperHeroTable displayTable = {this.state.superheroes}/>
            </div>
                       
        )    
        }



        
         
      }
    

export default App;