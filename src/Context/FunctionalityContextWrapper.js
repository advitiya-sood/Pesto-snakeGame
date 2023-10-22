import React, { useEffect, useRef, useState } from 'react'
import FunctionalityContext from './FunctionalityContext'
import { useInterval } from '../UseInterval';


const SNAKE_START = [
    [8, 7],
    [8, 8],
    [8,9]
  ];
  const FOOD_START = [8, 3];
  const SCALE = 20;
  
  const SPEED = {
    "LEVEL1":500,
    "LEVEL2":300,
    "LEVEL3":100,
    "LEVEL4":50
  }
  
  const DIRECTIONS = {
    "ArrowUp": [0, -1], 
    "ArrowDown": [0, 1], 
    "ArrowLeft": [-1, 0], 
    "ArrowRight": [1, 0] 
  };




function FunctionalityContextWrapper({children}) {
  


    const snakeCanvas = useRef();
    // const [canvasContext,setCanvasContext]=useState();
    const [currentScore,setcurrentScore]=useState(0);
    const [snake, setSnake] = useState(SNAKE_START);
    const [food, setFood] = useState(FOOD_START);
    const [dir, setDir] = useState([1, 0]);
    const [speed, setSpeed] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    const [loggedInUser,setLoggedInUser]=useState();
  
    const startGame=()=>{
      setSnake(SNAKE_START);
      setDir([0,-1]);
      setSpeed(SPEED.LEVEL1);
      setFood(FOOD_START)
      setGameOver(false)
      setcurrentScore(0)
    
    }
  


useEffect(()=>{                                                     // to persisist loged in user
    let activeUser = JSON.parse(localStorage.getItem("Active"));
    if (activeUser){
        setLoggedInUser(activeUser)
    }
    },[])


   const snakeMove=(event)=> {
    if (event.keyCode>=37 && event.keyCode<=40){
        setDir(DIRECTIONS[event.code])
    }} 
  
  
  const Collision=(snakeHead,snk=snake)=>{
    if ((snakeHead[0]+1) * SCALE >=700  || snakeHead[0]<=0         //boundary check for x axis
      || (snakeHead[1]+1) * SCALE >=600 || snakeHead[1] <=0 ){    // boundary check for y axis
          return true 
      }
  
      for( const part of snk){                                            // check for self collision of the snake
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
      setcurrentScore((prev)=>prev+10)  //increasing the score
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
    setSpeed(null);
    setGameOver(true)
  }
  
  useInterval(gameWork,speed)
   
  
  useEffect(()=>{                           //change difficulty based on score
    if(currentScore>30){
      setSpeed(SPEED.LEVEL2)
    }
    else if (currentScore>80){
      setSpeed(SPEED.LEVEL3)
    }
    else if (currentScore>120)
        setSpeed(SPEED.LEVEL4)
  },[currentScore])
  
    useEffect(()=>{

if (snakeCanvas.current){   
        
    const canvasContext= snakeCanvas.current.getContext("2d")
    canvasContext.setTransform(SCALE,0,0,SCALE,0,0)
    canvasContext.clearRect(0,0,700,600)
    
    canvasContext.fillStyle="green"
    snake.forEach(([x,y])=>canvasContext.fillRect(x,y,1,1))
    canvasContext.fillStyle="blue"
    canvasContext.fillRect(food[0],food[1],1,1)
}

    },[food,snake,gameOver])





    const Provider={
        snakeCanvas,
        startGame,
        snakeMove,
        gameOver,
        currentScore,
        loggedInUser,
        setLoggedInUser
    }

  return (
    <FunctionalityContext.Provider value={Provider} >
        {children}
    </FunctionalityContext.Provider>
  )
}

export default FunctionalityContextWrapper
