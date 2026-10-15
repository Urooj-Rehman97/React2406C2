import React from 'react'

const SecondComponent = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.desc}</p>
      <h4>{props.faculty}</h4>
    </div>
  )
}

export default SecondComponent
