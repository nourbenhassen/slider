import React from "react";
import styled from "styled-components";

export const SurveyList = styled.ul`
  list-style: none;
`;

export const SurveyElement = styled.li`
  border: 1px solid #C5C5C5;
  color: #C5C5C5
  text-align: center;
  padding: 10px;
  border-radius: 3px;
  margin-bottom: 10px;
  :hover {
    border-color: red;
    color: red;
  }
  &.active {
    border-color: blue;
    color: blue;
  }
`;
