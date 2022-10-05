import React, { Component } from 'react'

export default class Raj extends Component {
    state = {
        gunshots: 0
    }
    hendlegun = () => {
        this.setState({ gunshots: this.state.gunshots + 2 })
    }
    render() {
        return (
            <div>
                <h3 onMouseOver={this.hendlegun} style={{backgroundColor:"gold",width:"160px"}}>Raj GunShots : {this.state.gunshots}</h3>
                <button onClick={this.hendlegun}>M416</button>
            </div>
        )
    }
}
