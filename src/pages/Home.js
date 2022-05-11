import React from 'react'
import { Link } from 'react-router-dom'
import User from '../Layouts/User'

 function Home() {
  return (
    <div>
      <p><Link to='./Category'> گروه</Link></p>
      <p><Link to='/detail'>عکس </Link></p>
    </div>
  )
}export default User(Home)
