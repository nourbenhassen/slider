import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Submit from "./Submit";

import Form from "./Form";
import ProgressBar from "./ProgressBar";
import {
  ArrowWrapper,
  Button,
  Tracker,
  ProgressInTracker,
  StepList,
} from "./styles";
import { ReactComponent as Arrow } from "../assets/arrow.svg";
import { AppContext } from "../App";

export function Slide(props) {
  const { survey } = props;
  const [position, setPosition] = useState(1);
  const data = useContext(AppContext);

  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");

  // calculer dynamiquement ?
  const lastPosition = 3;

  const prevStep = () => {
    if (position > 1) setPosition(position - 1);
    setProgress(progress - 45);
  };
  const nextStep = () => {
    if (
      position < lastPosition &&
      ((position === 1 && data.status) || (position === 2 && data.age))
    ) {
      setPosition(position + 1);
      setProgress(progress + 45);
      setError("");
    } else setError("Champ obligatoire");
  };

  return (
    <div>
      <div>
        <StepList>
          <li>Status</li>
          <li>Age</li>
          <li>Revenu</li>
        </StepList>
        <Tracker>
          <ProgressInTracker percentage={progress} />
        </Tracker>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <ArrowWrapper onClick={() => prevStep()} visible={position !== 1}>
          <Arrow />
        </ArrowWrapper>

        <Form
          ref={form => (this.myForm = form)}
          form={
            survey[
              Object.keys(survey).find(key => survey[key].position === position)
            ]
          }
          step={Object.keys(survey).find(
            key => survey[key].position === position,
          )}
        />

        <ArrowWrapper
          reversed={true}
          onClick={() => nextStep()}
          visible={position !== lastPosition}
        >
          <Arrow />
        </ArrowWrapper>

        {error && (
          <p style={{ color: "red" }} className="error">
            {error}
          </p>
        )}

        <Button
          to="/submit"
          visible={position === lastPosition}
          disabled={!data.salaire}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}

export default Slide;

//useReducer
//useContext - moins scalable que useReducer
