import React, {Component} from 'react';
import './SuperheroCreateForm.css';


class SuperheroCreateForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
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
            SuperheroName: " "
         }
    }


    handleChange = (event) => {
        this.setState({
            SuperheroName : event.target.value
        });
    }

    handleSubmit = (event) =>{
        

    } 


    render() { 
        return ( 
            <React.Fragment>
            <form  onSubmit = {this.handleSubmit}>
                <label> Superhero Name</label>
                <input onChange = {this.handleChange} />
                <button type='submit'> Add Superhero</button>
            </form> 

            </React.Fragment>
         );
    }
}
 
export default SuperheroCreateForm;