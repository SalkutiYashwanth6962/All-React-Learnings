import React, { createContext, useContext } from "react";

export let UserName=React.createContext();
export let Age =React.createContext();
export let Obj=React.createContext();

//export {UserName,Age};
//firstly e have to take one global file 
//createContext()
// 1-global export let name=React.createContext();//import
// 2wrap global app <name.Provider value="yash">parentcomponent</name.Provider>
// let name1=useContext(name)



