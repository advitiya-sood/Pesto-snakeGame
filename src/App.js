
import { useEffect, useRef, useState } from 'react';
import './App.css';
import Canvas from './Components/Canvas';
import { useInterval } from './UseInterval';
import Score from './Components/Score';


const SNAKE_START = [
  [8, 7],
  [8, 8]
];
const FOOD_START = [8, 3];
const SCALE = 20;

const SPEED = {
  "LEVEL1":500,
  "LEVEL2":300,
  "LEVEL3":100,
}

const DIRECTIONS = {
  "ArrowUp": [0, -1], // up
  "ArrowDown": [0, 1], // down
  "ArrowLeft": [-1, 0], // left
  "ArrowRight": [1, 0] // right
};

function App() {

  const snakeCanvas = useRef();
  // const [canvasContext,setCanvasContext]=useState();
  const [snake, setSnake] = useState(SNAKE_START);
  const [food, setFood] = useState(FOOD_START);
  const [dir, setDir] = useState([1, 0]);
  const [speed, setSpeed] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const startGame=()=>{
    setSnake(SNAKE_START);
    setDir([0,-1]);
    setSpeed(SPEED.LEVEL1);
    setFood(FOOD_START)
    setGameOver(false)
  
  }

 const snakeMove=(event)=> {
  setDir(DIRECTIONS[event.code])
 } 


const Collision=(snakeHead,snk=snake)=>{
  // console.log("snakeHead-snake",snakeHead,snk)
  if ((snakeHead[0]+1) * SCALE >=700  || snakeHead[0]<=0         //boundary check for x axis
    || (snakeHead[1]+1) * SCALE >=600 || snakeHead[1] <=0 ){    // boundary check for y axis
        return true 
    }

    for( const part of snk){
      if ( part[0] ===snakeHead[0] && part[1] ===snakeHead[1] ){
        return true
      }}

    return false
 }


 

 const FoodEaten=(newSnake)=>{

  function createFood(){
    return food.map((val, t) => Math.floor(Math.random() * ([700,600][t] / SCALE)));
  }

  if (newSnake[0][0] === food[0] && newSnake[0][1] === food[1]) {     // random generation for food
    let newFood = createFood();

    while (Collision(newFood)) {      // stop it to randomly generating on the sanke
      newFood = createFood();
    }

    setFood(newFood);
    return true;
  }
  return false;
  
 }

 const gameWork=()=>{
  const newSnake=JSON.parse(JSON.stringify(snake))
  const newSnakeHead = [newSnake[0][0] + dir[0], newSnake[0][1] + dir[1]];
  newSnake.unshift(newSnakeHead);
  
  Collision(newSnakeHead)&& gameFinish()

    if (!FoodEaten(newSnake)){
      newSnake.pop()
    }

  setSnake(newSnake)
}



const gameFinish=()=>{
  console.log("game finish")
  setSpeed(null);
  setGameOver(true)
}

useInterval(gameWork,speed)
 
// useEffect(() => {
//   let id = setInterval(gameWork, 100);
//   return () => clearInterval(id);
// },[]);

// setInterval(gameWork,1000)



  useEffect(()=>{
    console.log("ran")
   const canvasContext= snakeCanvas.current.getContext("2d")
    canvasContext.setTransform(SCALE,0,0,SCALE,0,0)
    canvasContext.clearRect(0,0,700,600)

    canvasContext.fillStyle="green"
    snake.forEach(([x,y])=>canvasContext.fillRect(x,y,1,1))
    canvasContext.fillStyle="blue"
    canvasContext.fillRect(food[0],food[1],1,1)
    

  },[food,snake,gameOver])


  return (
  <div style={{display:'flex', justifyContent:"space-between", alignItems:"center"}} >
      <Canvas snakeCanvas={snakeCanvas} startGame={startGame} snakeMove={snakeMove} gameOver={gameOver} />
      <Score/>
  </div>
      
  );
}

export default App;
