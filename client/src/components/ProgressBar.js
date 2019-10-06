import React from "react"
import { Tracker, ProgressInTracker } from "./styles"

export function ProgressBar(props) {
    
    return (
        <div>
            <ul style={{ listStyle: "none", width: "50%", display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                    <li>Status</li>
                    <li>Age</li>
                    <li>Revenu</li>
            </ul>

            <Tracker>
                <ProgressInTracker percentage={25}/>
            </Tracker>
        </div>)
}
export default ProgressBar

// Object.assign(source, target) === {...source, target}
