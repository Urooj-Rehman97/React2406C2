import React from 'react'
import MongoDb from "../assets/MongoDb.png"

 export const FirstComponent = () => {
  return (
    <div>
      <h1>FirstComponent</h1>
      <p>We are learning ReactJs</p>
      <img src={MongoDb} alt="" height={100} width={100}/>
    </div>
  )
}
// export default  myFunction = () => {
//   return Hello
// }

export default FirstComponent
