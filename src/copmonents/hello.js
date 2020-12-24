import React, { Component } from 'react';

class Hello extends Component {
    constructor(props) {
        super(props);
        this.increase = this.increase.bind(this);
    }
    state = {
        age: 16,
        user:  {
            name: "Mohammad",
            lastName: "Abdelfattah",
        },
        socialLinks: [
            "facebook",
            "twitter",
        ]
    }
    decrement = ()=> {
            this.setState({age: this.state.age - 1});
    }
    increase() {
        this.setState({age: this.state.age + 1});
    }
    updateName(event ) {
        const newName = event.target.value;
         
        this.setState({
            user: {
                ...this.state.user,
                name: newName,
            }
        });
    }
    render(){
        return <div>
        Hello {this.props.name} from class components.
            <p> {this.state.user.name} {this.state.age}Age: {this.state.age}</p>
            <button onClick={()=>{this.setState({age: this.state.age + 1}) }}>Increase</button>
            <button onClick={this.decrement}>Decrease</button>
            <button onClick={this.increase}>Increase with function</button>
            <br />
            <input type="text" value={this.state.user.name} onChange={this.updateName.bind(this)} />
        </div>
    }
 }
export default Hello;