import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  display: ${props => (props.visible ? "block" : "none")};
  pointer-events: ${props => (props.disabled ? "none" : "initial")};
`;
