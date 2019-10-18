import React from "react";
import styled from "styled-components";

export const StepList = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const ProgressInBar = styled.div`
  background: red;
  border: #ff9000;
  height: 100%;
  width: 50%%
  position: absolute;
  z-index: 2;
`;

export const Tracker = styled.div`
  display: flex;
`;

export const Bar = styled.div`
  background: ${props =>
    `linear-gradient(90deg, rgba(255,144,0,1), rgba(255,144,0,${
      props.percent === 100 ? "1" : "0"
    }) ${props.percent}%)`};
  border: ${props => (props.filled ? "#FF9000" : "")};
  height: 5px;
  width: 100%;
  border: 1px solid #c8c8c8;
  border-radius: 5px;
  position: relative;
`;

export const Dot = styled.div`
  background-color: ${props => (props.filled ? "#FF9000" : "white")};
  z-index: 1;
  height: 15px;
  width: 15px;
  top: -6px;
  position: absolute;
  right: -8px;
  border: 1px solid ${props => (props.filled ? "#FF9000" : "#c8c8c8")};
  border-radius: 100%;
`;
