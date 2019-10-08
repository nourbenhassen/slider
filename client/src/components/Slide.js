import React, { useState } from 'react';
import Form from './Form'
import ProgressBar from './ProgressBar'
import { ArrowWrapper, Button, Tracker, ProgressInTracker } from "./styles"
import { ReactComponent as Arrow } from "../assets/arrow.svg"

export function Slide(props) {
  const { survey } = props
  const [position, setPosition] = useState(1)
  const [data, setData] = useState({
    "status": null,
    "age": null,
    "salaire": null
  })
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState ("")

  // calculer dynamiquement ?
  const lastPosition = 3;

  const prevStep = () => {
    if (position > 1)
      setPosition(position - 1)
      setProgress(progress - 45)
  }
  const nextStep = () => {
    if (position < lastPosition && ((position ===1 && data.status) || (position ===2 && data.age || position ===3 && data.salaire))) { 
      setPosition(position + 1)
      setProgress(progress + 45)
      setError("")
    }
    else setError("Champ obligatoire")
  }
  return (
    <div>
      <div>
            <ul style={{ listStyle: "none", width: "50%", display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                    <li>Status</li>
                    <li>Age</li>
                    <li>Revenu</li>
            </ul>
            <Tracker>
                <ProgressInTracker percentage={progress}/>
            </Tracker>
      </div>
      <div style= {{display: "flex", flexDirection: "row"}}>
      <ArrowWrapper onClick={() => prevStep()} visible={ position !== 1 }>
        <Arrow />
      </ArrowWrapper>
      
      <Form
        form={survey[Object.keys(survey).find(key => survey[key].position === position)]}
        step={Object.keys(survey).find(key => survey[key].position === position)}
        data={data}
        setData={setData} /> 

      <ArrowWrapper reversed={true} onClick={() => nextStep()}  visible={ position !== lastPosition }>
        <Arrow />
      </ArrowWrapper>

      {error && <p style = {{color: "red"}} className="error">{error}</p>}

      <Button onClick={() => console.log(data)} visible={ position === lastPosition }>Submit</Button>
    </div>
    </div>
  );
}

export default Slide;