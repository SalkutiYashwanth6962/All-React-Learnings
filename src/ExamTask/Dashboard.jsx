import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import "./global.css"
import image from "./../images/shopping-cart.png"

const Dashboard = () => {
    let[count,setCount]=useState(0);
    let styleObj={
        backgroundColor:"",
        height:"340px",
        width:"250px",
        float:"left",
        margin:"23px",
        overflow:"hidden",
        border:"2px solid black",
        borderRadius:"5px"
        
    
        }
    let styleObject2={
        margin:'0px',
        padding:'0px',
        height:'50px',
        width:'100%',
        backgroundColor:'powderblue'
    }
    let addToCart=()=>{
      setCount(count+1)

    }
    let[details,setDetails]=useState(null)
    useEffect(()=>{
        try{
            let fetchdata=async()=>{
                let {data}= await axios.get("https://fakestoreapi.com/products")
                console.log(data)
                setDetails(data)
                console.log(details)
            }
            fetchdata();
           
        }catch(error){
            console.log(error)
        }
        
    },[])
  return (
    <>
    <div id="navbar" style={styleObject2}>
    <span style={{fontSize:'30px',fontWeight:700}}>AJIO
    </span>
     <img src={image}style={{width:'40px',height:'40px'}} alt="mdj" id="imgid" />
   
    <span id="countid">{count}</span>
    
    </div>
    {details==null?"loading....":details.map(item=>{
        return(
            <Fragment key={item.id}>
               
            
            
    <div style={styleObj}>
        <center>
           
    <h1 style={{fontSize:"15px"}}>{item.id}</h1>
    <h1 style={{fontSize:"18px"}}>{item.title.slice(0,30)}</h1>
    <center><img src={item.image} alt="" style={{height:"200px",width:"200px"}} /></center>
    <h1 style={{fontSize:"15px"}}>{item.description.slice(0,80)}</h1>
    <button style={{backgroundColor:"orangered",borderRadius:"5px" }} onClick={addToCart}>Add To Cart</button>
    </center>
    
    </div>
    </Fragment>

        )
    })}
    
    </>
  )
}

export default Dashboard