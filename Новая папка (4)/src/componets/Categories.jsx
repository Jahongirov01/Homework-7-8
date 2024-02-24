import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import hangmanSlice from '../redux/Slice'


const Categories = ({data}) => {
  const [category, setCategory]=useState(null)
  const dispatch=useDispatch()
  
  const kategoriya=useSelector(state=>state.selectedCategory)

  const getRandomWord = (arr) => {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
  };
  const randomSelect=(value)=>{
    const wordArr=data.categories[value]
    let hiddenWord=getRandomWord(wordArr)
    console.log(hiddenWord);
    dispatch(hangmanSlice.actions.changeHiddenWord(hiddenWord))

  }
  const handleCategory=(v)=>{
    const value=v.target.value
    setCategory(value)
    randomSelect(value)

  }
  return (
    <div className="categ">
      <select onChange={(v)=>{handleCategory(v)}} name="category" id="1">
      {data?
        Object.keys(data.categories).map(key => (
          <option key={key} value={key}>{key}</option>
        )):"..."
      }
      </select>
      <h1>{category?category:kategoriya}</h1>
    </div>
  )
}

export default Categories;