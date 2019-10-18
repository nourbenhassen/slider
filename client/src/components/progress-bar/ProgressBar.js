import React from "react";
import PartialProgressBar from "./PartialProgressBar";
import { Tracker, StepList } from "../styles";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function ProgressBar({ position, survey }) {
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
        {survey.map((surveyItem, i) => (
          <li key={surveyItem.position}>
            {capitalizeFirstLetter(surveyItem.name)}
          </li>
        ))}
      </StepList>
      <Tracker>
        {survey.map((surveyItem, i) => (
          <>
            <PartialProgressBar
              isLast={position === survey.length}
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
