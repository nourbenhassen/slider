import React from "react"
import styled from "styled-components"

export const ProgressInTracker = styled.div `
background: yellow;
height: 100%; 
width: ${props => props.percentage}%;
border-radius: 7px;
`