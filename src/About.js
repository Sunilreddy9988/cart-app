import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import { useLocation } from 'react-router-dom'

const About = () => {
    let {search} = useLocation();
    let params = new URLSearchParams(search);

  return (
    <div>
        <center>welcome to about page</center><br/>
        <h2>name:{params.get('name')}</h2>
        <p>age:{params.get('age')}</p>
        <Link className='Link' to='/'>Back to Home</Link>
        <Link className='Link' to='/Orders'>Back to Orders</Link> 
    </div>
  )
}

export default About