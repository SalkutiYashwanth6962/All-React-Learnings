import React from 'react';

import products from "../product.json" ;
import styles from"./CardTask.module.css"

const CardTask = () => {
    let styleObj={
    backgroundColor:"",
    height:"400px",
    width:"250px",
    float:"left",
    margin:"23px",
    overflow:"hidden",
    border:"2px solid black",
    borderRadius:"5px",
    mixBlendMode:"multiply"

    }
   
   
return(
     
products.slice(0,5).map((item)=>{
    
    console.log(item.title)
    return <>
    
    <div style={styleObj}>
        <center>
           
    <h1 style={{fontSize:"15px"}}>{item.id}</h1>
    <h1 style={{fontSize:"18px"}}>{item.title.slice(0,30)}</h1>
    <center><img src={item.image} alt="" style={{height:"200px",width:"200px"}} /></center>
    <h1 style={{fontSize:"15px"}}>{item.description.slice(0,80)}</h1>
    <button style={{backgroundColor:"orangered",borderRadius:"5px" }}>Add To Cart</button>
    </center>
    
    </div>
    </>
})
)
}

export default CardTask