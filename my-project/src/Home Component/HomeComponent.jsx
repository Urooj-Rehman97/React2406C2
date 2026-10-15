import React from 'react'


import Loop from '../Loop/Loop'
import SecondComponent from '../Second Component/SecondComponent'
import FirstComponent from '../FirstComponent/FirstComponent'
const HomeComponent = () => {
  return (
    <div>
       {/* UI */}
   <h1>Abc</h1>
   <p>hello </p>
   <FirstComponent/>
   {/* <FirstComponent/>
   <FirstComponent/>
   <FirstComponent/> */}
   <SecondComponent title="React" desc="React is a JavaScript library" faculty="Urooj Rehman"/>
   <SecondComponent title="MERN" desc="MERN stands for Mongo Express React Node" faculty="Urooj Rehman"/>
   <FirstComponent/>
   
   <Loop/>
    </div>
  )
}

export default HomeComponent
