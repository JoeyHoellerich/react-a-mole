import './App.css';
import React, {useState} from "react"
import MoleContainer from './MoleContainer';

// Main App 
function App() {
  // define score that will increment as user bops moles
  // start score at 0
  let [score, setScore] = useState(0)

  // function to generate 9 Mole containers
  const createMoleHill = () => {
    // hills will contain an array of mole conatiners
    let hills = []
    // create a for loop to run 9 times
    for (let i=0; i < 9; i++){
      // create a mole container and add it to "hills" array
      hills.push(
        // create unique id
        // pass in setScore, score property to be used by MoleContainer component
        <MoleContainer key={i} setScore={setScore} score={score}/>
      )
    }

    // createMoleHill function returns a div container contatining all 9 mole containers
    return(
      <div className='container'>
        {hills}
      </div>
    )
  }

  // The main app returns
  return (
    <div className="App">
      <h1>React-A-Mole</h1>
      {score}
      <div>
        {/* runs the createMoleHill function to generate moleHills */}
        {createMoleHill()}
      </div>
    </div>
  );
}

export default App;
