import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddUser = () => {

  const [user,setuser] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    website: ''
  })

  const navigate = useNavigate()

  const onsubmit = async(e)=>{
    e.preventDefault()
    const response = await axios.post('http://localhost:3031/users/', user)
    navigate('/')
  }

  const changeinput =(e)=>{
    setuser({...user, [e.target.name]: e.target.value})
  }

  return (

    <div className='AddUser' >

      <button onClick={()=>navigate('/')} >BACK</button>

       <form onSubmit={onsubmit}>
              <div>
                <h3>name</h3>
                <input type="text" name='name' value={user.name} onChange={(e)=> changeinput(e)}  />
                </div>    
              <div>
                <h3>username</h3>
                <input type="text" name='username' value={user.username}  onChange={(e)=> changeinput(e)}  />
                </div>    
              <div>
                <h3>email</h3>
                <input type="text" name='email' value={user.email}  onChange={(e)=> changeinput(e)}  />
                </div>    
              <div>
                <h3>phone</h3>
                <input type="text" name='phone' value={user.phone} onChange={(e)=> changeinput(e)}  />
                </div>    
                <button>ADD</button>
        </form> 
    </div>
  )
}

export default AddUser