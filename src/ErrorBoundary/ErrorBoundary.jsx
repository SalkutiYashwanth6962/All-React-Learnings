import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(){
    super()
    this.state={
      hasError:false
    }
  }
  static getDerivedStateFromError(){
     return{
      hasError:true
     }
  }
  render() {
    if(this.state.hasError){
      return <h1>something went wrong1</h1>
    }
    else{
      return this.props.children
    }
  }
}


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
 
