import React, { useContext } from 'react'
import FunctionalityContext from '../Context/FunctionalityContext'

function Score() {

const {currentScore}=useContext(FunctionalityContext);


  return (
    <div style={{width:"500px", height:"500px"}} >
      <div style={{height:"20%",border:"0.5px solid black",display:"flex", justifyContent:"center"}} >
        <h2>Your Score : {currentScore}</h2>
      </div>
      <div style={{height:"80%",border:"0.5px solid black",display:"flex", justifyContent:"center"}} >
       <h2>Top Score</h2> 
       <div>    </div>
      </div>


    </div>
  )
}

export default Score
