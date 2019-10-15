import React, { useState, useContext, useEffect } from "react";
import Form from "./Form";
import ProgressBar from "./progress-bar/ProgressBar";
import {
  SlideWrapper,
  ArrowLeft,
  ArrowRight,
  ArrowLeftWrapper,
  ArrowRightWrapper,
  ArrowContainer,
  ButtonWrap,
  Button,
} from "./styles";
import { AppContext } from "../App";

export function Slide(props) {
  const { survey } = props;
  const [position, setPosition] = useState(1);
  const [valid, setValid] = useState(false);
  const data = useContext(AppContext);

  const [error, setError] = useState("");

  //Arrow color change
  const isValueValid = isValueValid => {
    setValid(isValueValid);
  };
  // calculer dynamiquement ?
  const lastPosition = 3;

  const prevStep = () => {
    if (position > 1) setPosition(position - 1);
  };
  const nextStep = () => {
    if (
      position < lastPosition &&
      ((position === 1 && data.status) || (position === 2 && data.age))
    ) {
      setPosition(position + 1);
      setValid(false);
      setError("");
    } else setError("Champ obligatoire");
  };

  const handleUserKeyPress = event => {
    if (event.key === "Enter" || event.keyCode === 39) {
      nextStep();
    } else if (event.keyCode == 37) {
      prevStep();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);

    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  });

  const stepsName = [];
  for (let [key, question] of Object.entries(survey)) {
    stepsName[question.position - 1] = key;
  }

  return (
    <>
      <ProgressBar position={position} stepsName={stepsName} />
      <SlideWrapper>
        <ArrowContainer>
          <ArrowLeftWrapper onClick={() => prevStep()} visible={position !== 1}>
            <ArrowLeft style={{ width: 20 }} />
          </ArrowLeftWrapper>
        </ArrowContainer>
        <Form
          isValueValid={isValueValid}
          ref={form => (this.myForm = form)}
          form={
            survey[
              Object.keys(survey).find(key => survey[key].position === position)
            ]
          }
          step={Object.keys(survey).find(
            key => survey[key].position === position,
          )}
          error={error}
          setError={setError}
        />
        <ArrowContainer>
          <ArrowRightWrapper
            reversed={true}
            onClick={() => nextStep()}
            visible={position !== lastPosition}
            valid={valid}
          >
            <ArrowRight style={{ width: 20 }} />
          </ArrowRightWrapper>
        </ArrowContainer>
      </SlideWrapper>
      <ButtonWrap>
        <Button
          to="/submit"
          visible={position === lastPosition}
          disabled={!data.salaire}
        >
          Submit
        </Button>
      </ButtonWrap>
    </>
  );
}

export default Slide;

//useReducer
//useContext - moins scalable que useReducer
