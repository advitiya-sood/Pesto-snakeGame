import React, { useContext } from 'react'
import FunctionalityContext from '../Context/FunctionalityContext'

function Score() {

const {currentScore,loggedInUser}=useContext(FunctionalityContext);


  return (
    <div style={{width:"500px", height:"550px"}} >
      <div style={{height:"25%",border:"0.5px solid black",
      display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"
    }} >
        <h2>{loggedInUser?.name}</h2>
        <h2>  your score : {currentScore}</h2>
      </div>
      <div style={{height:"75%",border:"0.5px solid black",display:"flex", justifyContent:"center"}} >
       <h2>Top Score</h2> 
       <div>    </div>
      </div>


    </div>
  )
}

export default Score
