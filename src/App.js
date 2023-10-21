
import './App.css';
import Canvas from './Components/Canvas';
import Score from './Components/Score';



function App() {

  return (
  <div style={{display:'flex', justifyContent:"space-around", marginTop:"50px", alignItems:"center"}} >
      <Canvas/>
      <Score/>
  </div>
      
  );
}

export default App;
