import React, { useState } from 'react';
import Form from './Form'
import ProgressBar from './ProgressBar'
import { ArrowWrapper, Button } from "./styles"
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
  // calculer dynamiquement ?
  const lastPosition = 3;

  const prevStep = () => {
    if (position > 1)
      setPosition(position - 1)
  }
  const nextStep = () => {
    if (position < lastPosition) { 
      setPosition(position + 1)
      setProgress(progress + 25)
    }
  }
  return (
    <div>
      <ProgressBar  percentage={progress}/>
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
      <Button onClick={() => console.log(data)} visible={ position === lastPosition }>Submit</Button>
    </div>
  );
}

export default Slide;