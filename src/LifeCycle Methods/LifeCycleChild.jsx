import React, { Component } from 'react'

export default class LifeCycleChild extends Component {
    componentWillUnmount(){
        console.log("I am unmounting")
    }
  render() {
    return (
      <div>LifeCycleChild</div>
    )
  }
}
