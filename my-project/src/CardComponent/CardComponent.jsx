import React from 'react'
import './CardComponent.css'

const CardComponent = (props) => {
  return (
    <div className='main'>
      <div className='img'>
         <img src={props.image} alt="" width={300} />
      </div>
      <div className='content'>
  <h2>{props.title}</h2>
  <p>{props.desc}</p>
  <button className='button'>Read More..</button>

      </div>
    </div>
  )
}

export default CardComponent
