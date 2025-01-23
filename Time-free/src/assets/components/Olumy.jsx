import { useState } from "react";
import "./Olumy.css"


const Olumy =() =>{

  const [myCounter, setMyCounter] = useState(2);
 const increaseCount =() => {
  setMyCounter(myCounter +3)
};
const DecreaseCount =() => {
  setMyCounter(myCounter -2)
}
const myStyle ={
  backgroundColor:"green",
  color:"white",
  paddind:"10px",
}

    return(
      <div>
        <img src="myCam.jpg" alt=""/>
        <h1>Falowo Olumide Babajide {myCounter}</h1>
        <p style={myStyle}>This is the day that the <b>lord</b> has made and i will rejoice and be gad in him.
          Join me to praise the name of the Lord.
        </p>
        <button onClick={increaseCount}>increase</button>
        <br />
        <button onClick={DecreaseCount}>Decrease</button>


      </div>
    )
  };
  
  export default Olumy