import React from 'react'

const Loop = () => {
    const students = ["Syed Hassan Ali", "Raza Sardar", "Sumaim", "Muhammad Ans", "Sarim"]
    // const courses = [
    //     {
    //         id:1,
    //         title: "Abc",
    //         desc: "gdbskjjthlkm"
    //     },
    //     {
    //       id:2,
    //       title: "Xyz",
    //       desc: "gdbskjjthlkm"
    //   },
    //   {
    //     id:3,
    //     title: "MNO",
    //     desc: "gdbskjjthlkm"
    // }
    // ]
  return (
    <div>
        <h1>Student List</h1>
      <ul>
        {students.map((std)=>(
         <li key={std.index}>{std}</li>
        ))}
      </ul>
      {/* {courses.map((cr)=>(
          <div key={cr.id}>
          <h1>{cr.title}</h1>
          <p>{cr.desc}</p>
        </div>
      ))} */}
    
    </div>
  )
}

export default Loop
