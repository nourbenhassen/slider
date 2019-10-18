import React from "react";
import styled from "styled-components";
import { ReactComponent as ValidateSvg } from "../../assets/validate.svg";

export const InputListElement = styled.li`
  position: relative;
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const InputValueElement = styled.input`
  border: ${props => (typeof props.value === "number" ? "orange" : "gray")};
  border-style: solid;
  border-width: 1px;
  width: calc(100% - 50px);
  height: 50px;
  border-radius: 7px;
  position: relative;
  padding: 0 25px;
  appearance: textfield;
  margin: 0;
`;

export const ValidateInput = styled(ValidateSvg)`
  border-radius: 100%;
  width: 20px;
  height: 100%;
  display: inline;
`;
