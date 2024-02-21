import React from 'react'

const InlineCss = () => {
    let styleObj={
        color:"green",
        border:"2px solid black",
        textAlign:"center",
        backgroundColor:"yellow"
    }
  return (
    <>
    <h1 style={styleObj}>InlineCss</h1>
    </>
  )
}

export default InlineCss
//we can perform the styling 3 ways like global css way ,componentname.module.css,inline {{}}