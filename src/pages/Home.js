import React from 'react'
import { Link } from 'react-router-dom'
import User from '../Layouts/User'

 function Home() {
  return (
    <div>
      <p><Link to='./Category'> گروه لبنیات</Link></p>
      <p><Link to='/detail'>عکس محصولات</Link></p>
    </div>
  )
}export default User(Home)
