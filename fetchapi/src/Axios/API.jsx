import React, { useEffect, useState } from 'react'
import axios from 'axios'

const API = () => {
    const [apiData, setApiData] = useState([])
    useEffect(()=>{
      axios.get("https://dummyjson.com/products").then(response => setApiData(response.data.products))
      .catch(error => console.log(error));
    },[])
  return (
    <div>
        <h1 className="text-center mt-5">Our Products</h1>
      <table className="table">
        
  <thead>
    <tr>
      <th scope="col">Product Name</th>
      <th scope="col">Category</th>
      <th scope="col">Price</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {apiData.map((dt)=>(
         <tr key={dt.id}>
         <td>{dt.title}</td>
         <td>{dt.category}</td>
         <td>{dt.price}</td>
         <td>
            <button className='btn btn-warning me-'>Edit</button>
            <button className='btn btn-danger'>Delete</button>
         </td>
        </tr>
    ))}
   

  </tbody>
</table>
    </div>
  )
}

export default API
