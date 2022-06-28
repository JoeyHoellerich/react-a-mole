import React, {useEffect} from "react"
import noMole from "./molehill.png"

// NoMole holds image of empty mole hill and handles timer elements for empty slot
function NoMole(props){
    // create timer that will have the empty moll hill replaced with a moll after a random amount of ms
    useEffect(() => {
        // random amount of time (ms)
        let randomTime = Math.round(Math.random() * 15000)
        // create a timer
        let timer = setTimeout(() => {
            // mole appears
            props.setDisplayState(true)
        }, randomTime)
        // cleanup
        return () => clearTimeout(timer)
    })
    // NoMole is an image of empty moll hill
    return(
        <img src={noMole} alt="noMole" style={{"width": "150px"}} />
    )
}

export default NoMole