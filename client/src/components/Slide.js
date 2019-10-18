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
  const lastPosition = survey.length;

  //Go back to previous slide
  const prevStep = () => {
    if (position > 1) setPosition(position - 1);
  };

  //function is Next step valid or not
  function isNextStepValid() {
    if (!data[position - 1]) return false;
    return true;
  }
  //Go to next slide
  const nextStep = () => {
    if (isNextStepValid()) {
      setPosition(position + 1);
      setValid(false);
      setError("");
    } else setError("Champ obligatoire");
  };

  // keyPress Enter or nextarrow to go to next slide
  const handleUserKeyPress = event => {
    if (event.key === "Enter" || event.keyCode === 39) {
      nextStep();
    } else if (event.keyCode === 37) {
      prevStep();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);

    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  });

  return (
    <>
      <ProgressBar position={position} survey={survey} />
      <SlideWrapper>
        <ArrowContainer>
          <ArrowLeftWrapper onClick={prevStep} visible={position !== 1}>
            <ArrowLeft style={{ width: 20 }} />
          </ArrowLeftWrapper>
        </ArrowContainer>
        <Form
          isValueValid={isValueValid}
          form={survey[position - 1]}
          position={position}
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
          disabled={!data[lastPosition - 1]}
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
