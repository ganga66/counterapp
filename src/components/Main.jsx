import React, { useState } from 'react'

function Main() {
    const[counter,setcounter]=useState(0)
    function incrementcounter(){
        setcounter(counter+1)
    }
    function decrementcounter(){
        if(counter!==0){
        setcounter(counter-1)
        }
    }
    function reset(){
    
        setcounter(0)
    }
  return (
    <div className='m-3 p-5'>
        <div className="counter m-5 p-5">
            <h3>Counter App</h3>
            <h1>{counter}</h1>
            <button onClick={incrementcounter} className='btn btn-primary mx-2'>Increment</button>
            <button onClick={decrementcounter} className='btn btn-dark mx-2'>Decrement</button>
            <button onClick={reset} className='btn btn-danger mx-2'>Reset</button>

        </div>
    </div>
  )
}

export default Main