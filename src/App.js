import React, { useEffect, useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { incNumber, decNumber, Reset } from './Actions/index'
import { Apps } from './Api'
import Todo from './Component/Todo';



const App = () => {

  const myState = useSelector((state) => state.changeTheNumber)
  const dispatch = useDispatch()
  return (
    <>
      <div className="container">
        <div className="quantity" >
          <div className='Das'>
            <h1>Count App :</h1>
            {/* <br></br> */}
            <a className="quantity__minus" title="Decrement" onClick={() => dispatch(decNumber())}><span>-</span></a>
            <input name="quantity" type="text" class="quantity_input" value={myState} />
            <a className="quantity__plus" title="Increment" onClick={() => dispatch(incNumber())}><span>+</span></a>
            
            <button button onClick={() => dispatch(Reset())}>Reset</button>
            </div>

          <div >
            <Apps />
            <Todo/>
            </div>
        </div>
      </div>

    </>
  )
}
export default App