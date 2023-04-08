import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Pagination from './Pagination'
import { useNavigate } from 'react-router-dom'


const Home = () => {

  
    const [users, setuser] = useState([])
    const [filter,setfilter] = useState([])
    const [serach,setsearch] = useState('')
    const navigate = useNavigate()

    useEffect(()=>{
      sliceusers(0,5)
    },[users])

    useEffect(()=>{
      loadusers()
    },[])


    const loadusers = async ()=>{
      const response = await axios.get('http://localhost:3031/users')
      setuser(response.data)
    }

    const sliceusers = async (min,max)=>{
      const newusers = users.slice(min,max)
      setfilter(newusers)
    }

    const deleteusers = async (id) =>{
      const response = await axios.delete('http://localhost:3031/users/' + id)
      loadusers()
    }

    const funcobject = ()=>{
      if(serach === ''){
        return filter
      }
      return users
    }
  

  return (
    <div className='Home' >
      <button id='btn' onClick={()=> navigate('/add')} >ADD USER</button>
      <form className='Search-bar'>
        <input type="search" onChange={(e) => setsearch(e.target.value)} placeholder='Search...' />
      </form>
      <table>
        <thead>       
  <tr>
    <th>ID</th>
    <th>NAME</th>
    <th>USERNAME</th>
    <th>Email</th>
    <th>PHONE</th>
    <th>ACTIONS</th>
  </tr>
  </thead>
  <tbody>
    {  funcobject().filter((el =>{
      return serach.toLowerCase() == '' ? el : el.name.toLowerCase().includes(serach)  
    })).map(el =>
  <tr key={el.id} >
    <td>{el.id}</td>
    <td>{el.name}</td>
    <td>{el.username}</td>
    <td>{el.email}</td>
    <td>{el.phone}</td>
    <td  className='ACTIONS'>
      <button onClick={()=> navigate('/user/'+ el.id)} >View</button>
      <button  onClick={()=> navigate('/edituser/'+ el.id)}> Edit</button>
      <button onClick={()=> deleteusers(el.id)} >Delete</button>
    </td>
  </tr>
      )}          
  </tbody>
</table>
      <Pagination sliceusers={sliceusers} users={users}/>
    </div>
    
  )
}

export default Home