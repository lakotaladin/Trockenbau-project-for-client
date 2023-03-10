import React from 'react';
import FadeLoader from "react-spinners/FadeLoader";
import '../resources/global.css';

function Loader() {
   return (
      <div className='spinner'>
         <FadeLoader
            color="#ffffff"
            size={400}
         />
      </div>

   )
}

export default Loader