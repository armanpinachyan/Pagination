import React from 'react'
import Contact from './Contact'
import Home from './Home'
import About from './About'
import { Routes, Route } from 'react-router-dom'
import Notfound from './Notfound'
import Navbar from './Navbar'
import AddUser from './AddUser'
import User from './User'
import EditUser from './EditUser'


const App = () => {
  return (
    <div className='App' >
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/*' element={<Notfound/>} />
      <Route path='/add' element={<AddUser/>} />
      <Route path='/user/:id' element={<User/>} />
      <Route path='/edituser/:id' element={<EditUser/>} />
      </Routes>

    </div>
  )
}

export default App