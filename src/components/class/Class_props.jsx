import React, { Component } from 'react'

export default class Class_props extends Component {
  render() {
    return (
      <>
      <h1>class components</h1>
      <h1>{this.props.name}</h1>
      </>
    )
  }
}
