import React from 'react'
import { forwardRef } from 'react'

const FChild = forwardRef((props,ref) => {
  return (
   <>
   <input type="text" ref={ref} />
   </>
  )
})

export default FChild
