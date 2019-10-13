import React from "react";
import styled from "styled-components";

// export const FormWrapper = styled.div`
//   width: 50%;
//   margin: auto;
// `;

export const FormWrapper = styled.div`
  max-width: 500px;
  margin-top: 60px;
  flex: 3;
`;

export const SurveyList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const SurveyElement = styled.li`
  position: relative;
  margin: auto;
  border: 1px solid #c5c5c5;
  color: black;
  text-align: center;
  padding: 10px;
  border-radius: 7px;
  margin-bottom: 10px;
  padding-top: 22px;
  height: 30px;
  :hover {
    border-color: orange;
    color: orange;
  }
  &.active {
    background-color: orange;
    border-color: orange;
    color: white;
  }
  &.error {
    background-color: red;
    border-color: red;
    color: white;
  }
`;
