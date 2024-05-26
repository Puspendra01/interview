import React, { Component } from 'react'

export default class Component_DidMount extends Component {
    constructor(){
        super()
        this.state = {
            name : 'ram'
        }
        console.log('constructor')
    }
    componentDidMount(){
        console.log('hello component did mount')
    }
  render() {
    console.log('render')
    return (
      <>
      <h1>{this.state.name}</h1>
      </>
    )
  }
}
