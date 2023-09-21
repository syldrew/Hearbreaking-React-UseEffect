import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.scss";

import Broken from "./components/Broken";
import Fixed from "./components/Fixed";

function Application() {
  const [likes, setLikes] = useState(0);


  // Add a console.log
  // useEffect(() => {
  //   console.log(`Likes count: ${likes}`);
  // }, [likes]);


  // document.body
  // useEffect(() => {
  //   document.body.className = `bg--${likes % 2}`;
  // }, [likes]);


  //setTimeout without clean up
  // useEffect(() => {
  //   if (likes > 0) {
  //     setTimeout(() => setLikes(prev => prev - 1), 1000);
  //   }
  // }, [likes]);
  
  //setTimeout with clean up
  // useEffect(() => {
  //   if (likes > 0) {
  //     const timeout = setTimeout(() => setLikes(prev => prev - 1), 1000);
  //     return () => clearTimeout(timeout); // clears the timer set above
  //   }
  // }, [likes]);
  

  useEffect(() => {
    console.log(`Likes count: ${likes}`);
    document.body.className = `bg--${likes % 2}`;
    if (likes > 0) {
      const timeout = setTimeout(() => setLikes((prev) => prev - 1), 1000);
      return () => clearTimeout(timeout); // clears the timer set above
    }
  }, [likes]);



  return (
    <div onClick={() => setLikes(likes + 1)}>
      {likes > 0 ? <Fixed>{likes}</Fixed> : <Broken />}
    </div>
  );
}

ReactDOM.render(<Application />, document.getElementById("root"));

