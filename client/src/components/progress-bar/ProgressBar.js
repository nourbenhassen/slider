import React from "react";
import PartialProgressBar from "./PartialProgressBar";
import { Tracker, ProgressInTracker, StepList, Dot } from "../styles";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function ProgressBar({ position, stepsName }) {
  const getPercent = index => {
    if (position === index) {
      return 90;
    } else if (position > index) {
      return 100;
    } else {
      return 0;
    }
  };
  return (
    <>
      <StepList>
        {stepsName.map((stepName, i) => (
          <>
            <li>{capitalizeFirstLetter(stepName)}</li>
          </>
        ))}
      </StepList>
      <Tracker>
        {stepsName.map((stepName, i) => (
          <>
            <PartialProgressBar
              isLast={position === stepsName.length}
              percent={getPercent(i + 1)}
              filled={position - 1 > i}
            />
          </>
        ))}
      </Tracker>
    </>
  );
}
export default ProgressBar;

// Object.assign(source, target) === {...source, target}
