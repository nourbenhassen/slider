import React from "react";
import { Bar, Dot } from "../styles";

export const PartialProgressBar = ({ filled, isLast, percent }) => {
  return (
    <Bar percent={percent} isLast={isLast}>
      <Dot filled={filled} isLast={isLast} />
    </Bar>
  );
};

export default PartialProgressBar;
