import React, { useState } from 'react'

function Count() {
    const [count, setcount] = useState(0)

  return (
    <>
    <h1>you clicked times {count}</h1>
    <button onClick={()=>setcount(count+1)}> +</button>
    <button onClick={()=>setcount(count-1)}> -</button>
    </>
  )
}

export default Count