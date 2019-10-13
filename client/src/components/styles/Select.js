import React from "react";
import styled from "styled-components";
import { ReactComponent as ValidateSvg } from "../../assets/validate-white.svg";

export const SelectElement = styled.input`
  visibility: hidden;
`;

export const ValidateSelect = styled.div`
  visibility: ${props => (props.visible ? "initial" : "hidden")};
  position: absolute;
  right: 20px;
  height: 100%;
  top: 0;
  width: 20px;
`;

export const Validate = styled(ValidateSvg)`
  border-radius: 100%;
  width: 20px;
  height: 100%;
  display: inline;
`;
