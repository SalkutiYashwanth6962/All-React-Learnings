//!task1
// import React,{useState} from 'react'

// const Counter=()=>{
//     let [state,setState]=useState(0);
//     let handleIncrement=()=>{
//         setState(state+1);
//         //setState((state>10)?"you won lottery":"lost")
//     }
//     let handleDecrement=()=>{
//         setState(state-1);
//     }
//     let handleReset=()=>{
//         setState(0);
//     }
 
//     return (
        
//         <>
//         <h1>{state}</h1>
//         {state==10?<h1>You won the lottery</h1>:<></>}
//         <button onClick={handleIncrement}>Increment {state}</button>
//         <button onClick={handleDecrement}>Decrement {state}</button>
//         <button onClick={handleReset}>Reset {state}</button>
//         {/* <button onClick={lottery}>lottery</button> */}
        
        

      
//         </>
//     )

// }
// export default Counter;

// //rafce
//useState allows us to track the state in a function component
//state(data or properities)
//import React, { useState } from 'react'

// const Counter = () => {
//     let [state,setState]=useState(0);
//     let increment=()=>{
//      setState(state+1);
//     }
//     let decrement=()=>{
//         setState(state-1);
//        }
//     let reset=()=>{
//         setState(state=0);
//        }

//   return (
//     <>
//     <h1>{state}</h1>
//     <button onClick={increment}>Increment</button>
//     <button onClick={decrement}>Decrement</button>
//     <button onClick={reset}>resett</button>
//     </>
//   )
// }

// export default Counter

//!task2
// import React, {useState} from 'react'

// const Counter = () => {
//      let[food,setFood]=useState(" ");
//      let biryani=()=>{
//       setFood("biryani")
//      }
//      let gobi=()=>{
//       setFood("gobi")
//      }
//      let kfc=()=>{
//       setFood("kfc")
//      }
//   return (
//     <>
//     <h1>You favourite food is: {food}</h1>
//     <button onClick={biryani}>Chicken Biryani</button>
//     <button onClick={gobi}>Gobi</button>
//     <button onClick={kfc}>kfc</button>
//     </>
//   )
// }

// export default Counter
//!task
// import React, { useState } from 'react'

// const Counter = () => {
  
//   let [name,setName]=useState();
//   let [age,setAge]=useState();
//   let reveal=()=>{
//     setName("Yashwanth");
//     setAge(22);
    
//   }
//   return (
//     <>
//     <h1>My name is:{name}</h1>
//     <h1>My Age is:{age}</h1>
//     <button onClick={reveal}>Reveal My age and name</button>
//     </>
//   )
// }

// export default Counter

//!task4 using objects

import React, { useState } from 'react'

const Counter = () => {
  
   let [details,setDetails]=useState(
    {
      name:"",
      age:"",
      place:""
    })
    let reveal=()=>{
      setDetails({
        name:"yashwanth",
        age:"23",
        place:"hyderabad"
      })
    }
    let reset=()=>{
      setDetails({
        name:"shshgh "
      })
    }
  return (
    <>
    <h1>My name is:{details.name}</h1>
    <h1>My place is:{details.age}</h1>
    <h1>My age is:{details.place}</h1>
    <button onClick={reveal}>Reveal my details</button>
    <button onClick={reset}>Reset</button>
    </>
  )
}

export default Counter