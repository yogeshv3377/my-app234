import React, { Component } from 'react'
import Nsir11 from './Nsir11'

export default class Nsir1 extends Component {


  state={
    name:"kaenataka state",
    place:"bengloure",
    contact:8845978123,
    Image:"https://images.pexels.com/photos/7203694/pexels-photo-7203694.jpeg?auto=compress&cs=tinysrgb&w=600"
    
  }
  


  render() {
    return (
      <div>
        <center>

          <Nsir11 name={this.state.name}/>
          <Nsir11 name={this.state.place}/>
          <Nsir11 name={this.state.contact}/>
          <Nsir11 name={this.state.Image}/>




        </center>
      </div>
    )
  }
}

