import React from 'react'
import Canvas from './Components/Canvas'
import Score from './Components/Score'

export default function Home() {
  return (
    <div style={{display:'flex', justifyContent:"space-around", marginTop:"50px", alignItems:"center"}} >
            <Canvas/>
            <Score/>
    </div>
  )
}
