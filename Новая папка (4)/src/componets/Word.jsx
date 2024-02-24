import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Word = () => {
  const [hiddenWord, setHiddenWord]=useState([])
  const yashirinSoz=useSelector(state=>state.hiddenWord)
  
  useEffect(() => {
    let lettArr=[]
    for (let i of yashirinSoz){
      const obj={
        letter: i.letter,
        founded: i.founded,
      }
      lettArr.push(obj)
    }
    
    setHiddenWord(lettArr);
  }, [yashirinSoz]);
  return (
    <div className='hiddenword'>
        {hiddenWord.map(el=>(
          el.letter==" "?<div className='probel'></div>:
          <span className={el.founded?"founded":"notfounded"} key={Math.random()}>{el.letter}</span>
        ))}
    </div>
  )
}

export default Word