import React from 'react'
import CardComponent from './CardComponent/CardComponent'
import ReactJs from './assets/ReactJs.png'
import MongoDb from './assets/MongoDb.png'
import node from './assets/node.jpg'
import ExpressJs from './assets/ExpressJs.png'
const CourseComponent = () => {
  return (
    <div>
      <div style={{"display":"flex", "justifyContent" : "space-evenly"}}>
   <CardComponent image={MongoDb} title="MongoDB" desc="MongoDB is a source-available, cross-platform, document-oriented database program. Classified as a NoSQL database product, MongoDB uses JSON-like documents"/>
   <CardComponent image={ReactJs} title="ReactJs" desc="React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript."/>
   <CardComponent image={ExpressJs} title="ExpressJs" desc="Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications."/>
   <CardComponent image={node} title="NodeJs" desc="Node.js is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts."/>
   
   </div>
    </div>
  )
}

export default CourseComponent
