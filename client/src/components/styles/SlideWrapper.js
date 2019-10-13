import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: auto;
  @media (min-width: 576px) {
    width: 540px;
  }
  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 992px) {
    width: 960px;
  }
  @media (min-width: 1200px) {
    width: 1140px;
  }
`;

export const SlideWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
