import React, { useEffect, useRef } from "react";
import './App.css';
import useWebAnimations,{backInLeft} from "@wellyshen/use-web-animations";


function App() {
  // const element = useRef(null);


  const { ref, playState, getAnimation } = useWebAnimations({ backInLeft}); 
  //    keyframes:
  //    [
  //      {transform:"translate(0,0)"},
  //      {transform:"translate(560px,0)"},
  //    ], 
  //    timing: {
  //      delay: 500, // Start with a 500ms delay
  //      duration: 1000, // Run for 1000ms
  //      iterations: 4, // Repeat once
  //      direction: "alternate", // Run the animation forwards and then backwards
  //      easing: "ease-in-out", // Use a fancy timing function
  //    },
  //    onReady: ({ playState, animate, animation }) => {
  //      // Triggered when the animation is ready to play (Google Chrome: available in v84+)
  //    },
  //    onUpdate: ({ playState, animate, animation }) => {
  //      // Triggered when the animation enters the running state or changes state
  //    },
  //    onFinish: ({ playState, animate, animation }) => {
  //      // Triggered when the animation enters the finished state (Google Chrome: available in v84+)
  //    },
  //    // More useful options...
  // });

   //Use for directly making the focus on the textbox
  // useEffect(() => {
  //   element.current.focus();
  // }, [])
  return (
    <div>
      <div className="target" ref={ref} />
      Current animation state {playState}
      <button onClick={()=> getAnimation().pause()}>Pause</button>
      <button onClick={()=> getAnimation().play()}>Play</button>
      
    </div>
  );
};

export default App;
