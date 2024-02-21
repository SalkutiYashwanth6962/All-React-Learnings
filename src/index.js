import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"
import AppJSX from "./JSX/AppJSX";
import Counter from "./UseState/Counter";
import { Age, UserName } from "./Context/GlobalContext";
//import AppJSX from "./JSX/AppJSX";
console.log("here react library starts")
//console.log(React);
console.log(ReactDOM);
//ReactDOM.createRoot(document.getElementById("root")).render("I am displaying through react again... ")

// ReactDOM.createRoot(document.getElementById("root")).render(<h1>I am heading..</h1>)
//=========================================================================================
//we can render the content in two ways from app.jsx file 

//ReactDOM.createRoot(document.getElementById("root")).render(<App></App>)

//ReactDOM.createRoot(document.getElementById("root")).render(<App/>)
//ReactDOM.createRoot(document.querySelector("#root")).render(<Counter/>)


ReactDOM.createRoot(document.getElementById("root")).render(
     <App/>
   
   

)
//ReactDOM.createRoot(document.getElementById("root")).render(<App/>)
//import React from 'react'

const index = () => {
  return (
    <div>index</div>
  )
}

export default index