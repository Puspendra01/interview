import React, { Component } from 'react'

export default class Class_State extends Component {
    constructor(){
        super()
        this.state = {
            name : 'ram'
        }
    }
    submit(){
        this.setState({
            name : 'sita'
        })
    }
  render() {
    return (
      <>
      <h1>State components</h1>
      <h1>{this.state.name}</h1>
      <button onClick={()=>this.submit()}>click here</button>
      </>
    )
  }
}
