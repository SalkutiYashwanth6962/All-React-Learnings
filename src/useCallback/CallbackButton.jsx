import React from 'react'

const CallbackButton = ({send,children}) => {
  console.log(`rendering the ${children} component`)
  return (
     <button onClick={send}>{children}</button>
  )
}

export default React.memo(CallbackButton)