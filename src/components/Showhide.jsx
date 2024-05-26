import React, { useState } from 'react'

function Showhide() {
    const [status, setstatus] = useState(true)
  return (
    <>
    {
        status ? <h1>Hello everyone</h1> :null
    }
    <button onClick={()=>setstatus(false)}>hide</button>
    <button onClick={()=>setstatus(true)}>show</button>
    <button onClick={()=>setstatus(!status) }>toggle</button>
    </>
  )
}

export default Showhide