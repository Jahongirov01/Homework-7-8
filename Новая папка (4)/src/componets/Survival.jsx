import React from 'react'
import { useSelector } from 'react-redux'

const Survival = () => {
  
  const jon=useSelector(state=>state.survival) 
  

  return (
    <div className='survival'>
      <div className='showing'>
        <span style={{width: jon?jon*22:240}}></span>
      </div>
      <img src="../src/assets/heart.svg" alt="#" />
    </div>
  )
}

export default Survival