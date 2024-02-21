import React from 'react'

const CallbackTitle = () => {
    console.log("rendering title component")
  return (
    <div>CallbackTitle</div>
  )
}

export default React.memo(CallbackTitle)