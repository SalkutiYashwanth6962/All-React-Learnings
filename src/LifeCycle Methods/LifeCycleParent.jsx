import React, { Component } from 'react'
import LifeCycleChild from './LifeCycleChild';

export default class LifeCycleParent extends Component {
    constructor(){
        console.log("I am constructor");
        super();
        this.state={
            name:"Yashwanth",
            remove:true
        }

    }
    componentDidMount(){
        console.log("I am ComponentdidMount")
    }
    componentDidUpdate(){
        console.log("I am  componentDidUpdate")
    }
    handleState=()=>{
     this.setState({name:"Ravi"})
    }
    handleRemove=()=>{
        this.setState({remove:false
        })
    }

  render() {
    console.log("I am render");
    return (
      <>
       <h1>{this.state.name}</h1>
       <button onClick={this.handleState}>Click Here to change</button>
       {
        this.state.remove? <LifeCycleChild/>:<></>
       }
      
       <button onClick={this.handleRemove}>Click here to remove child</button>
      </>
    )
  }
}
