import React, { useState } from 'react'

function SignupForm() {
    const [username, setusername] = useState()
    const [password, setpassword] = useState()
    const submitHandlerData =(e)=>{
        e.preventDefault()
        console.log(username, password)
    }
  return (
    <>
    <h1>Form</h1>
    <div className='container'>
        <form onSubmit={submitHandlerData}>
            <div>
                <label htmlFor="">Username</label>
                <input className='formm-control' type="text" onChange={(e)=>setusername(e.target.value)}/>
            </div>
            <div >
                <label htmlFor="">Paassword</label>
                <input className='form-control' type="password" onChange={(e)=>setpassword(e.target.value)}/>
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
    </>
  )
}

export default SignupForm