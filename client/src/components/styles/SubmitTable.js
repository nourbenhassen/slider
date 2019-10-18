import React from "react";
import styled from "styled-components";

export const SubmitTable = styled.table`
  border-radius: 7px;
  background-color: rgba(255, 144, 0, 0.4);
  width: 100%;
  margin: auto;
  @media (min-width: 576px) {
    width: 100%;
  }
  @media (min-width: 768px) {
    width: 50%;
  }
  @media (min-width: 992px) {
    width: 50%;
    margin: auto;
    margin-top: 15px;
  }
  @media (min-width: 1200px) {
    width: 50%;
    margin: auto;
    margin-top: 15px;
  }

  margin: 50px auto;
  text-align: center;
  border-collapse: collapse;
  tr:nth-child(even) {
    background-color: rgba(221, 221, 221, 0.4);
  }
  tr {
    height: 60px;
  }
`;

export const SubmitTableWrapper = styled.table`
  text-align: center;
  font-size: 20px;
`;
