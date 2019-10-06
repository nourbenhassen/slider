import React from "react"

export function Form(props) {
    console.log(props)
    const getSelectType = () => props.form.option && props.form.option["multiple-choice"] ? "checkbox" : "radio" 
    const onChange = (e) => {
        if (props.form.type === "select" && getSelectType() === "checkbox") {
            // If multiple choice true
        } else {
            const newData = {...props.data};
            newData[props.step] = props.form.type === "select" ? e.target.value : parseInt(e.target.value, 10)
            props.setData(newData)
        }
    }
    return (
        <div>
            <h4>{props.form.label}</h4>
            {props.form.data.map((input, key) =>
                <label key={key}>{input.label}
                    <input value={props.form.type === "select" ? input.value : typeof props.data[props.step] === "number" && props.data[props.step]}
                        checked={props.form.type === "select" && props.data[props.step] === input.value ? true : undefined}
                        onChange={onChange}
                        name={props.form.type === "select" ? "select-group" : undefined}
                        type={props.form.type === "select" ? getSelectType() : "number"}
                        min={props.form.type === "input" ? (props.form.option.min || 0) : undefined}
                        max={props.form.type === "input" ? props.form.option.max : undefined}/>
                </label>
            )}
        </div>)
}
export default Form

// Object.assign(source, target) === {...source, target}