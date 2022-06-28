import React, { useEffect } from "react"
import mole from "./mole.png"

// Mole is the component that holds the mole image and timer for the image
function Mole(props){

    // create timer for mole (only exists for a small amount of time)
    useEffect(() => {
        // random number between 0-10000 (ms)
        let randomTime = Math.round(Math.random() * 10000)
        // run the function after randomTime
        let timer = setTimeout(() => {
            // mole disappears
            props.setDisplayState(false)
        }, randomTime)
        // when image is clicked or rerendered clear the timer so they don't stack
        return () => clearTimeout(timer)
    })
    // the Mole is an image that will run the handleClick function when clicked
    return(
        <img src= {mole} alt="mole" style={{"width": "150px"}} onClick={props.handleClick} />
    )
    
}

export default Mole