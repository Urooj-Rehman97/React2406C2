import React, { useState } from 'react'

const UseStateHook = () => {
    const [count, setCount] = useState(0)
    const [username, setUsername] = useState("Guest User")
    const [text, setText] = useState(false)
    function increment(){
        setCount(count+1)
    }
    // function decrement(){
    //     setCount(count-1)
    // }
    // const handleOnchange = (e)=>{
    //   setUsername(e.target.value)
    // }
  return (
    <div>
      <h2 className='text-center'>Task 01</h2>
      <h1 className='text-center'>Counter</h1>
     <div className="row">
        <div className="col-6 offset-3">
        <button className='btn btn-info me-2' onClick={()=>{count>0? setCount(count-1): count}}>-</button>
      <input type="text" value={count}/>
      <button className='btn btn-info ms-2' onClick={increment}>+</button>
        </div>
     </div>

     <h2 className='text-center'>Task 02</h2>
     <div className="row">
        <div className="col-6 offset-3">
          <label htmlFor="">UserName</label>
       {/* <input type="text" className='form-control' onChange={handleOnchange}/> */}
       <input type="text" className='form-control' onChange={(e)=>{setUsername(e.target.value)}}/>
       <h2>Welcome {username}</h2>
        </div>
     </div>

     <h2 className='text-center'>Task 03</h2>
     <h1 className='text-center'>Hide and Show Text</h1>
    
     <div className="row">
        <div className="col-6 offset-3">
        <p>{text && "Text show and Hide using useState Hook...."}</p><br/>
    <button className={text? "btn btn-danger" : "btn btn-success"} onClick={()=>{setText(!text)}}>{text? "Hide":"Show"}</button>        </div>
     </div>

    </div>
  )
}

export default UseStateHook
