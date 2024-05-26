import React, { useState } from 'react'

function Registern() {
    const [username, setusername] = useState()
    const [password, setpassword] = useState()
    const [email, setemail] = useState()
    const [contact, setcontact] = useState()
    const submitHandlerData = (e)=>{
        e.preventDefault()
        console.log(username, password, email, contact)
    }
  return (
    <>
    <h1>Registern here</h1>
    
        <form onSubmit={submitHandlerData}>
            <div>
                <label htmlFor="">Username</label>
                <input type="text" onChange={(e)=>setusername(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="">Password</label>
                <input type="password" onChange={(e)=>setpassword(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input type="text" onChange={(e)=>setemail(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="">Contact</label>
                <input type="text" onChange={(e)=>setcontact(e.target.value)}/>
            </div>
            <button type='submit'>Submit</button>
        </form>
    </>
  )
}

export default Registern