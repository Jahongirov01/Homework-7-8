import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import hangmanSlice from '../redux/Slice'



const Keyboard = () => {
  const [lettersArr, setLettersArr]=useState([])
  const dispatch=useDispatch()

  const harflar=useSelector(state=>state.letters)
  const yashirinSoz=useSelector(state=>state.hiddenWord)

  useEffect(()=>{
    setLettersArr(harflar)
  }, [harflar])

  const handleLetter=(letter)=>{
    let newYashirinSoz=[]
    console.log(yashirinSoz);
    yashirinSoz.forEach(el => {
      let obj={
        letter: el.letter,
        founded: false,
      }
      if (el.letter==letter){
        obj={
          letter: el.letter,
          founded: true,
        }
      }
      newYashirinSoz.push(obj)
    });
    dispatch(hangmanSlice.actions.updateHiddenWord(newYashirinSoz))
  }

  return (
    <div className='keyboard'>
      {lettersArr.map(el=>(
        <button onClick={()=>{handleLetter(el.letter)}} key={Math.random()}>{el.letter}</button>
      ))}
    </div>
  )
}

export default Keyboard