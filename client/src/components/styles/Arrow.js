import React from "react";
import styled from "styled-components";
import { ReactComponent as ArrowWhite } from "../../assets/arrow-white.svg";
import { ReactComponent as ArrowOrange } from "../../assets/arrow-orange.svg";

export const ArrowContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  margin-top: 250px;
`;

export const ArrowRightWrapper = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 100%;
  background-color: ${props => (props.valid ? "orange" : "gray")};
  position: relative;
  cursor: pointer;
  transform: ${props => (props.reversed ? "rotate(180deg)" : "")};
  visibility: ${props => (props.visible ? "inital" : "hidden")};
`;

export const ArrowLeftWrapper = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 100%;
  background-color: white;
  border: solid 1.4px orange;
  position: relative;
  cursor: pointer;
  visibility: ${props => (props.visible ? "inital" : "hidden")};
`;

export const ArrowRight = styled(ArrowWhite)`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 25px;
  right: 25px;
`;

export const ArrowLeft = styled(ArrowOrange)`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 25px;
  right: 25px;
`;
