import React from "react";
import styled from "styled-components";

export const StepList = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const ProgressInTracker = styled.div`
  background: orange;
  border: orange;
  height: 100%;
  width: ${props => props.percentage}%;
`;

export const Tracker = styled.div`
  display: flex;
`;

export const Bar = styled.div`
  background: ${props =>
    `linear-gradient(90deg, rgba(255,116,0,1), rgba(255,116,0,${
      props.percent === 100 ? "1" : "0"
    }) ${props.percent}%)`};
  border: ${props => (props.filled ? "#FF7400" : "")};
  height: 5px;
  width: 100%;
  border: 1px solid black;
  border-radius: 5px;
  position: relative;
`;

export const Dot = styled.div`
  background: ${props => (props.filled ? "#FF7400" : "white")};
  z-index: 1;
  height: 12px;
  width: 12px;
  top: -4px;
  position: absolute;
  right: -8px;
  border: 1px solid black;
  border-radius: 100%;
`;
