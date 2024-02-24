import { createSlice } from "@reduxjs/toolkit";

const hangmanSlice=createSlice({
    name: "hangman",
    initialState: {
        selectedCategory: "Movies",
        survival: 5,  //max 10 
        hiddenWord: [
            { letter: 'T', founded: false },
            { letter: 'i', founded: false },
            { letter: 't', founded: false },
            { letter: 'a', founded: false },
            { letter: 'n', founded: false },
            { letter: 'i', founded: false },
            { letter: 'c', founded: false },
        ],
        letters: [
            { letter: 'a', clicked: false },
            { letter: 'b', clicked: false },
            { letter: 'c', clicked: false },
            { letter: 'd', clicked: false },
            { letter: 'e', clicked: false },
            { letter: 'f', clicked: false },
            { letter: 'g', clicked: false },
            { letter: 'h', clicked: false },
            { letter: 'i', clicked: false },
            { letter: 'j', clicked: false },
            { letter: 'k', clicked: false },
            { letter: 'l', clicked: false },
            { letter: 'm', clicked: false },
            { letter: 'n', clicked: false },
            { letter: 'o', clicked: false },
            { letter: 'p', clicked: false },
            { letter: 'q', clicked: false },
            { letter: 'r', clicked: false },
            { letter: 's', clicked: false },
            { letter: 't', clicked: false },
            { letter: 'u', clicked: false },
            { letter: 'v', clicked: false },
            { letter: 'w', clicked: false },
            { letter: 'x', clicked: false },
            { letter: 'y', clicked: false },
            { letter: 'z', clicked: false }
          ]
          
    },

    reducers: {
        selectCategory: (state, action)=>{
            const newState={...state}
            newState.selectedCategory=action.payload.name
            console.log(newState);
            return newState
        },
        changeHiddenWord: (state, action)=>{
            let newState={...state}
            newState.hiddenWord=action.payload.name
            return newState
        },
        updateHiddenWord: (state, action)=>{
            let newState={...state}
            newState=action.payload;
            return newState
        }
    },
})
export default hangmanSlice;