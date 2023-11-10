import React, { Component } from 'react'

export default class Nsir11 extends Component {
  render() {
    return (
      <div>

        <h1>{this.props.name}</h1>
        <h1>{this.props.place}</h1>
        <h1>{this.props.contact}</h1>
        <img src={this.props.image} alt='' />


      </div>
    )
  }
}
