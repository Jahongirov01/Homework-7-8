import { useEffect, useState } from "react"
import { Provider } from "react-redux";
import Categories from "./componets/Categories";
import store from "./redux/Store";
import Survival from "./componets/Survival";
import Keyboard from "./componets/Keyboard";
import Word from "./componets/Word";


const App=()=>{
  const [data, setData]=useState()
  async function fetchData() {
    try {
      const response = await fetch('../data.json'); 
      const data = await response.json();
          setData(data)
    } catch (error) {
      console.error('Xatolik yuz berdi:', error);
    }
  }
  useEffect(() => {
    fetchData()
  },[]);
  

  
  return (
    <Provider store={store}>
      <div className="app">
        <div className="hero">
          <Categories data={data}/>
          <Survival/>
        </div>
        <Word/>
        <Keyboard/>
      </div>
    </Provider>
  )
} 
export default App