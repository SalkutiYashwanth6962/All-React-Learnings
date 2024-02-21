// import React from "react";
// //CLASS BASED COMPONENT
// class App extends React.Component{
//     render(){
//         console.dir(this)
//         return<h1>I am class based component</h1>
//     }
// }


//!FUNCTION BASED COMPONENT
// const App=()=>{
//     console.dir(App)
//    return <h1>I am function based component</h1>
// }

// export default App;
//!context based(inorder to overcome the problem of prop drilling where there is context component)
// import React from 'react'
// import ParentContext from './Context/ParentContext'
// import {UserName,  Age, Obj } from './Context/GlobalContext'

// const App = () => {
//   let details={
//     skill:"java",
//     place:"Hyderabad",
//     func:()=>{
//       console.log("I am learning react")
//     }
//   }
//   return (
//     <>
    
//     <UserName.Provider value="Yashwanth">
//     <Age.Provider value="23">
//       <Obj.Provider value={details}>
//       <ParentContext/>
//       </Obj.Provider>
    
//     </Age.Provider>
//     </UserName.Provider>
  
    
//     </>
//   )
// }

// export default App
//!css
// import React from 'react'
// import InlineCss from './CssWays/InlineCss'

// const App = () => {
//   return (
//     <><InlineCss/></>
//   )
// }

// export default App

//!Uncontrolled Form

// import React from 'react'
// import UncontrolledForm from './Forms/UncontrolledForm'

// const App = () => {
//   return (
//     <div><UncontrolledForm/></div>
//   )
// }

// export default App
//?controlled forms
//todo Controlled Form
// import React from 'react'
// import ControlledForms from './Forms/ControlledForms/ControlledForms'

// const App = () => {
//   return (
//     <div><ControlledForms/></div>
//   )
// }

// export default App

//!card task
// import React from 'react'
// import CardTask from './CardTask/CardTask'

// const App = () => {
//   return (
//     <CardTask/>
//   )
// }

// export default App
//! Conditional Rendering
// import React from 'react'
// import Condition from './ConditionalRendering/Condition'

// const App = () => {
//   return (
//    <Condition/>
//   )
// }

// export default App

//!Dark Mode Task
// import React from 'react'
// import DarkModeTask from './ConditionalRendering/DarkModeTask'

// const App = () => {
//   return (
//     <><DarkModeTask/></>
//   )
// }

// export default App
//! Formik
// import React from 'react'
// import Formik from './Forms/Formik/Formik'

// const App = () => {
//   return (
//     <div><Formik/></div>
//   )
// }

// export default App
//!higher order components
// import React from 'react'
// import Parent from './Hoc/Parent'

// const App = () => {
//   return (
//     <Parent/>
//   )
// }

// export default App

//!Life Cycle Related
// import React from 'react'
// import LifeCycleParent from './LifeCycle Methods/LifeCycleParent'

// const App = () => {
//   return (
//     <div><LifeCycleParent/></div>
//   )
// }

// export default App

// import React from 'react'
// import Effect from './UseEffect/Effect'

// const App = () => {
//   return (
//     <div><Effect/></div>
//   )
// }

// export default App

//!Axios
// import React from 'react'
// import Fetchdata from './Axios/Fetchdata'

// const App = () => {
//   return (
//     <Fetchdata/>
//   )
// }

// export default App
//!Portals
// import React from 'react'
// import Portals from './Portals/Portals'

// const App = () => {
//   return (
//     <div><Portals/></div>
//   )
// }

// export default App

//!pure Component
// import React from 'react'
// import Pure from './PureComponent/Pure'
// import RegularCompoent from './PureComponent/RegularCompoent'

// const App = () => {
//   return (
//   <>
//    <RegularCompoent/>
//   <Pure/>
 
//   </>
//   )
// }

// export default App

//!Memo
// import React from 'react'
// import ParentComponent from './Memo/ParentComponent'

// const App = () => {
//   return (
//     <div><ParentComponent/></div>
//   )
// }

// export default App

//!Error Boundary
// import React from 'react'
// import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
// import Regular from './ErrorBoundary/Regular'

// const App = () => {
//   return (
//     <>
//     <ErrorBoundary>
//     <Regular name="yashwanth"/>
//     </ErrorBoundary>
//     <ErrorBoundary>
//     <Regular name="ravi"/>
//     </ErrorBoundary>
//     <ErrorBoundary>
//     <Regular name="ajith"/>
//     </ErrorBoundary>
    
   
    
//     </>
//   )
// }

// export default App
 

//!ForwardRef
// import React from 'react'
// import FParent from './ForwardRef/FParent'

// const App = () => {
//   return (
//     <div><FParent/></div>
//   )
// }

// export default App

//!useMemo 
// import React from 'react'
// import UseMemoComponent from './useMemo/UseMemoComponent'

// const App = () => {
//   return (
//     <div><UseMemoComponent/></div>
//   )
// }

// export default App


//!useCallBack
// import React from 'react'
// import CallbackParent from './useCallback/CallbackParent'

// const App = () => {
//   return (
//  <CallbackParent/>
//   )
// }

// export default App

//!Routing 
import React from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Home from './Router/Home'
import Services from './Router/Services'
import PageNotFound from './Router/PageNotFound'
import About from './Router/About'
import Contact from './Router/Contact'
import Profile from './Router/AboutInside/Profile'
import Connection from './Router/AboutInside/Connection'
import MainAbout from './Router/AboutInside/MainAbout'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<MainAbout/>}>
        <Route index element={<About/>}/>
        <Route path='/about/connection' element={<Connection/>}/>
        <Route path='/about/profile' element={<Profile/>}/>
        
         </Route>
      
      
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/services' element={<Services/>}></Route>
      <Route path='*' element={<PageNotFound/>}></Route>

    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
//! Router version6
// import React from 'react'
// import { BrowserRouter, Outlet, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'
// import Home from './Router/Home'
// import Services from './Router/Services'
// import PageNotFound from './Router/PageNotFound'
// import About from './Router/About'
// import Contact from './Router/Contact'
// import Profile from './Router/AboutInside/Profile'
// import Connection from './Router/AboutInside/Connection'
// import MainAbout from './Router/AboutInside/MainAbout'
// let route=createBrowserRouter([
//   {
//     path:"/",
//     element:<Home/>
//   },
//   {
//     path:"/about",
//     element:<MainAbout/>,
//     children:[
//       {
//         index:true,
//         element:<About/>
//       },
//       {
//         path:"/about/profile" ,
//         element:<Profile/>
//       },
//       {
//         path:"/about/connection",
//         element:<Connection/>
//       }
//     ]
//   },
//   {
//     path:"/contact",
//     element:<Contact/>
//   },
//   {
   
//     path:"/services",
//     element:<Services/>
//   },
//   {
   
//     path:"*",
//     element:<PageNotFound/>
//   }
// ])
// const App = () => {
  
//   return (
//     <RouterProvider router={route}/>
   

//     /* <BrowserRouter>
//     <Routes>
//       <Route path='/' element={<Home/>}></Route>
//       <Route path='/about' element={<MainAbout/>}>
//       <Route index element={<About/>}/>
//         <Route path='/about/connection' element={<Connection/>}/>
//         <Route path='/about/profile' element={<Profile/>}/>
        
//       </Route>
      
      
//       <Route path='/contact' element={<Contact/>}></Route>
//       <Route path='/services' element={<Services/>}></Route>
//       <Route path='*' element={<PageNotFound/>}></Route>

//     </Routes>
    
//     </BrowserRouter> */
   
//   )
// }

// export default App

//!Todo App
// import React from 'react'
// import ToDoList from './TodoTask1/TodoList'

// const App = () => {
//   return (
//     <><ToDoList/></>
//   )
// }

// export default App

//!exam task
// import React from 'react'
// import HomePage from './ExamTask/HomePage'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import SignUp from './ExamTask/SignUp'
// import Login from './ExamTask/Login'
// import Dashboard from './ExamTask/Dashboard'
// import CheckOut from './ExamTask/CheckOut'

// const App = () => {
//   return (
//     <BrowserRouter>
//     <Routes>
//       <Route path='' element={<HomePage/>}></Route>
//       <Route path='/signup' element={<SignUp/>}></Route>
//       <Route path='/login' element={<Login/>}></Route>
//       <Route path='/dashboard' element={<Dashboard/>}></Route>
//       <Route path='/checkout' element={<CheckOut/>}></Route>
//     </Routes>
//     </BrowserRouter>
    
//   )
// }

// export default App

//!CRUD APP

// import React from 'react'
// import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import Home from './CRUD App/Home'
// import Create from './CRUD App/Create'
// import Read from './CRUD App/Read'
// import Update from './CRUD App/Update'
// import PageNotFound from './CRUD App/PageNotFound'

// const App = () => {
//   let route=createBrowserRouter(
//     [
//       {path:"/",
//        element:<Home/>
//       },
//       {
//         path:"/create",
//        element:<Create/>
//       },
//       {
//         path:"/update/:id",
//        element:<Update/>
//       },
//       {
//         path:"/read/:id",
//        element:<Read/>
//       },
//       {
//         path:"*",
//        element:<PageNotFound/>
//       }
//     ]
//   )
//   return (
//     <>
//     <RouterProvider router={route}></RouterProvider>
//     </>
//   )
// }

// export default App


























//!Todochatgpt
// src/App.js
// import React, { useState } from 'react';
// import TodoList from './Todotaskchat/TodoList';


// const App = () => {
//   const [tasks, setTasks] = useState([
//     { id: 1, title: 'Task 1' },
//     { id: 2, title: 'Task 2' },
//     // Add more tasks as needed
//   ]);

//   const handleDelete = (taskId) => {
//     const updatedTasks = tasks.filter((task) => task.id !== taskId);
//     setTasks(updatedTasks);
//   };

//   const handleEdit = (taskId, editedTask) => {
//     const updatedTasks = tasks.map((task) =>
//       task.id === taskId ? { ...task, title: editedTask } : task
//     );
//     setTasks(updatedTasks);
//   };

//   return (
//     <div>
//       <h1>Todo List</h1>
      
//       <TodoList tasks={tasks} onDelete={handleDelete} onEdit={handleEdit} />
//     </div>
//   );
// };

// export default App;

// import React from 'react'
// import Form from './TodoProject/Form'

// const App = () => {
//   return (
//     <><Form/></>
//   )
// }

// export default App
