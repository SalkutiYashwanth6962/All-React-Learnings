import React, { Component, PureComponent } from 'react'
// rendering the component when there is actual change in the data
export default class Pure extends PureComponent {
    constructor(){
        super();
        this.state={
            name:"yashwanth"
        }
    }
  render() {
    console.log("pure")
    return (
        <>
        <h1>{this.state.name}</h1>
         <button onClick={()=>{
         this.setState({name:"yashwanth"})
       }}>PureCompoent</button>
        </> 
    )
  }
}
