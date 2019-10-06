import React from "react";
import styled from "styled-components"

export const ArrowWrapper = styled.div`
    width: 20px;
    transform: ${props => props.reversed ? "rotate(180deg)" : ""};
    display: ${props => props.visible ? "block" : "none"};
    cursor: "pointer";
`