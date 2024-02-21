import React, { Component } from 'react'

export default class RegularCompoent extends Component {
    constructor(){
        super();
        this.state={
            name:"yashwanth"
        }
    }
  render() {
    console.log("Regular component")
    return (
       
       <>
       <h1>{this.state.name}</h1>
        <button onClick={()=>{
        this.setState({name:"Monty"})
      }}>RegularCompoent</button>
       </>
     
    )
  }
}
