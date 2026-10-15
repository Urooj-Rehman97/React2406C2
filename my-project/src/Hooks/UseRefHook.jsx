import React, { useRef, useState } from 'react'

const UseRefHook = () => {
    const inputRef = useRef(null)
    const [output, setOutput] = useState()

    
  return (
    
    <div>
      <h1 className='text-center'>UseRef Task 01</h1>
      <div className="row">
        <div className="col-6 offset-3">
            <input type="text" className='form-control' placeholder='Type here.....' ref={inputRef}/>
            <button className='btn btn-success mt-5' onClick={()=>{setOutput(inputRef.current.value)}}>Display</button>
            <button className='btn btn-danger mt-5 ms-3' onClick={()=>{setOutput("")}}>Clear</button>
            <p><strong>Output: {output || "Empty"}</strong></p>
        </div>
      </div>
    </div>
  )
}

export default UseRefHook
