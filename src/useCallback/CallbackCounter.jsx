import React from 'react'

const CallbackCounter = ({text,count}) => {
    console.log(`rendering the increment${text} component`)
  return (
    <h1>{text}-{count}</h1>
  )
}

export default React.memo(CallbackCounter)