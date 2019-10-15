import React from "react";
import styled from "styled-components";

export const SubmitTable = styled.table`
  border-radius: 7px;
  background-color: #acacac;
  width: 60%;
  margin: 50px auto;
  text-align: center;
  border-collapse: collapse;
  tr:nth-child(even) {
    background-color: #dddddd;
  }
  tr {
    height: 60px;
  }
`;

export const SubmitTableWrapper = styled.table`
margin: 50px auto;
width: 50%
  text-align: center;
  font-size: 20px;
`;
