import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const User = () => {

  const [users,setuser] = useState([])

  const {id} = useParams()

  useEffect(()=>{
    loadusers()
  },[])


  const loadusers = async ()=>{
    const response = await axios.get('http://localhost:3031/users/' + id)
    setuser(response.data)
  }

  return (
    <div className='User' >
      <h2>{users.name}</h2>
      <h2>{users.username}</h2>
      <h2>{users.phone}</h2>
      <h2>{users.email}</h2>
    </div>
  )
}

export default User