import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const Orders = () => {
  return (
    <div>
        <center>welcome to orders page</center><br/>
        <Link className='Link' to='/About'>Back to About</Link>
        <Link className='Link' to='/'>Back to Home</Link>
    </div>
  )
}

export default Orders