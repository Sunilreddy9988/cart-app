import React from 'react'
import { useContext } from 'react'
import { store } from './App'

const Number = () => {
    const [data,setData] = useContext(store);
  return (
    <div className='card'>
        <div className='card-body'>
            <h3 className='card-title'>Count: {data.length}</h3>

        </div>
    </div>
  )
}

export default Number