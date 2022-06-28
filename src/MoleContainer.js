import React, {useState} from "react"
import Mole from "./Mole"
import NoMole from "./NoMole"

// defines the container that will hold either a Mole or NoMole
function MoleContainer(props){
    // passed in props -> setScore, score

    // define display state, when true a mole should be in the mole container
    // false shows an empty slot
    let [displyState, setDisplayState] = useState(false)

    // create a function that will run when image is clicked
    const handleClick = (e) => {
        // updates the score by 1 when a mole is clicked
        props.setScore(props.score + 1)
        // mole disappears
        setDisplayState(false)
    }

    // Mole Container is a div element with either a Mole or NoMole
    return(
        <div className="item">
            {/* pass in properties -> score, setScore, handleClick, setDisplayState */}
            { displyState ? <Mole score={props.score} setScore={props.SetScore} handleClick={handleClick} setDisplayState={setDisplayState}/> : <NoMole setDisplayState={setDisplayState}/>}
        </div>
    )
}

export default MoleContainer
