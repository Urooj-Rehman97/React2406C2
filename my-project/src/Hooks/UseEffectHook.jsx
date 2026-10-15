import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {
    const [count, setCount] = useState(0)

    // useEffect(()=>{
    //     console.log("Use Effect Hook invokes.....")
    // },[])

    useEffect(()=>{
        document.title = "Count: "+count
    },[count])
  return (
    <div>
      <h1 className='text-center'>Use Effect</h1>
      <h2 className='text-center'>Counter</h2>
      <div className="row">
        <div className="col-6 offset-3">
            <button className='btn btn-info me-3' onClick={()=>{count>0? setCount(count -1): setCount(0)}}>-</button>
            <input type="text" value={count}/>
            <button className='btn btn-info ms-3' onClick={()=>{setCount(count +1)}}>+</button>

        </div>
      </div>
    </div>
  )
}

export default UseEffectHook
