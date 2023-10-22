import React, { useContext, useEffect } from 'react'
import FunctionalityContext from '../Context/FunctionalityContext'

function Score() {  

const {currentScore,loggedInUser,personalTopScore}=useContext(FunctionalityContext);


  return (
    <div style={{width:"500px", height:"550px"}} >
      <div style={{height:"25%",border:"0.5px solid black",
      display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"
    }} >

        <h2>{loggedInUser?.name}</h2>
        <h2>  Current Score : {currentScore}</h2>
      </div>

      <div style={{height:"75%",border:"0.5px solid black",
      display:"flex", flexDirection:"column", justifyContent:"center"}} >

       <h2 style={{flex:0.1,textAlign:"center"}} >Top 5 Score</h2> 
       <div style={{flex:0.9}}> 
        {personalTopScore.map((item )=>(
        <h3  style={{textAlign:"center", marginTop:"25px"}} >{item}</h3>
        ))}
        </div>

      </div>
    </div>
  )
}

export default Score
