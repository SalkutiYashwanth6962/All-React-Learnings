import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'

const Fetchdata = () => {
    
    let[users,setUsers]=useState(null)
    useEffect(()=>{
        try{
            let fetchdata=async()=>{
                let {data}= await axios.get("https://api.github.com/users")
                console.log(data)
                setUsers(data)
                console.log(users)
            }
            fetchdata();
           
        }catch(error){
            console.log(error)
        }
        
    },[])
  return (
    < >
    <center>
    <table border="5px solid black" >
        <tr cellSpacing="10px">
            <th>ID</th>
            <th>Name</th>
            <th>Profile</th>
            <th>Github</th>
        </tr>
   
    {users==null?"loading....":users.map(val=>{
        return(
            <Fragment key={val.id}>
                <tr>
                <td>{val.id}</td>
            <td>{val.login}</td>
            <td><img src={val.avatar_url} alt="" width="100px" height="100px"/></td>
            <td><button ><a href={val.html_url}>click</a></button></td>
                </tr>
            <h1></h1>
            <h1></h1>
            
            
            </Fragment>

        )
    })}
     </table>
     </center>
    </>
  )
}

export default Fetchdata

// import React, { useEffect, useState } from 'react'

// const Fetchdata = () => {
//     let[state,setState]=useState(null)
//     useEffect(async()=>{let data=await axios.get(url)
//setUsers(data)},[])

//   return (
//     <>Fetchdata</>
//   )
// }

// export default Fetchdata
