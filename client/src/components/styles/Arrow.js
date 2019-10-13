import React from "react";
import styled from "styled-components";
import { ReactComponent as ArrowSvg } from "../../assets/arrow.svg";

export const ArrowContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  margin-top: 250px;
`;

export const ArrowWrapper = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 100%;
  background-color: ${props => (props.valid ? "orange" : "gray")};
  position: relative;
  cursor: pointer;
  transform: ${props => (props.reversed ? "rotate(180deg)" : "")};
  visibility: ${props => (props.visible ? "inital" : "hidden")};
`;

export const Arrow = styled(ArrowSvg)`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 25px;
  right: 25px;
`;
