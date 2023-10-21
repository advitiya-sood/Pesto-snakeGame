import React from 'react'

export default function Canvas({snakeCanvas,snakeMove,startGame,gameOver}) {





  return (
    <div role='button' tabIndex="0" onKeyDown={(event)=>snakeMove(event)}  
     style={{display:"flex", flexDirection:"column", alignItems:"center",justifyContent:"center"}} >

{gameOver &&
<div  style={{width:"700px",height:"600px", border:"1px solid black",
 display:"flex", justifyContent:"center",alignItems:"center"}} >
  <h1>GAME OVER</h1>
</div>
}
  <canvas
  style={ gameOver?{display:"none"} : {border:"1px solid black"}}
  width={"700px"}
  height={"600px"}
  ref={snakeCanvas}
  />

    
  <button  style={{marginTop:"20px"}} onClick={startGame}>Start</button>   
    </div>  
  )
}
