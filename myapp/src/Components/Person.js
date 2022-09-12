import React, {Component} from "react";

class Person extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state ={
           name : "Priti",
           age : "21",
        }
    }

    nameChangeHandler() {
        console.log(this.state);
       this.setState({name:"Prisha", age:"1"} , () => {
        console.log(this.state);
       });
    }

    render () {
        return (
            <div>
                <h1>Dear {this.state.name}, {this.state.age} years, Welcome to React App </h1><br/>
                <button onClick={() => this.nameChangeHandler()}>ChangeName</button>
            </div>
        )
    }
}

export default Person;