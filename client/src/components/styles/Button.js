import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled(Link)`
  display: ${props => (props.visible ? "block" : "none")};
  pointer-events: ${props => (props.disabled ? "none" : "initial")};
  font: bold 11px Arial;
  text-decoration: none;
  width: 75px;
  height: 20px;
  text-align: center;
  padding-top: 10px;
  border: 1px ${props => (props.disabled ? "gray" : "orange")} solid;
  background-color: ${props => (props.disabled ? "gray" : "white")};
  border-radius: 7px;
  color: ${props => (props.disabled ? "white" : "orange")};
  &:hover {
    background-color: orange;
    color: white;
  }
`;
