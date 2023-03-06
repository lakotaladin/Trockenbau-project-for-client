import React from 'react'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

function Loader() {
   return (
      <div className='spinner'>
         <ClimbingBoxLoader
            color="#ffffff"
            size={100}
         />
      </div>

   )
}

export default Loader