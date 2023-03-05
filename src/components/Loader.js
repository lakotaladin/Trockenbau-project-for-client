import React from 'react'
import ClockLoader from "react-spinners/ClockLoader";

function Loader() {
   return (
      <div className='spinner'>
         <ClockLoader
            color="#ffffff"
            size={100}
         />
      </div>

   )
}

export default Loader