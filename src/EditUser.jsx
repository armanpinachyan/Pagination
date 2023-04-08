import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const EditUser = () => {

  const nav = useNavigate()
  const {id} = useParams()
  const [user,setuser] = useState({
    name: '',
    username: '',
    email: '',
    phone: ''
  })

  useEffect(()=>{
    loadusers()
  },[])

  const loadusers = async ()=>{
    const response = await axios.get('http://localhost:3031/users/'+ id)
    setuser(response.data)
    console.log(response);
  }

  const onsubmit = async (e)=>{
    e.preventDefault()
    const response = await axios.put('http://localhost:3031/users/'+ id, user)
    nav('/')
  } 

  const changeinput = (e)=>{
   setuser({...user, [e.target.name]: e.target.value})
  }


  return (
    <div className='EditUser' >
      <form onSubmit={onsubmit}>
        <input type="text" name='name' value={user.name} onChange={e => changeinput(e)} />
        <input type="text" name='username' value={user.username} onChange={e => changeinput(e)} />
        <input type="text" name='phone' value={user.phone} onChange={e => changeinput(e)} />
        <button>Edit</button>
      </form>
    </div>
  )
}

export default EditUser