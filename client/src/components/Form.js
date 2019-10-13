import React, { useContext } from "react";
import { AppContext } from "../App";
import { InputText } from "./form/InputText";
import { Select } from "./form/Select";
import { SurveyList, SurveyElement } from "./styles";

export function Form(props) {
  const data = useContext(AppContext);
  const getSelectType = () =>
    props.form.option && props.form.option["multiple-choice"]
      ? "checkbox"
      : "radio";
  const onChange = e => {
    if (props.form.type === "select" && getSelectType() === "checkbox") {
      // If multiple choice true but it never happen
    } else {
      const newData = {};
      newData[props.step] =
        props.form.type === "select"
          ? e.target.value
          : parseInt(e.target.value, 10);
      data.setData(newData);
    }
  };
  return (
    <div>
      <h4>
        {props.form.type === "select"
          ? props.form.label
          : props.form.data[0].label}
      </h4>
      <SurveyList>
        {props.form.data.map((input, key) => (
          <label>
            {props.form.type === "select" ? (
              <SurveyElement
                key={key}
                className={data[props.step] === input.value ? "active" : ""}
              >
                {input.label}
                <Select
                  onChange={onChange}
                  data={data}
                  step={props.step}
                  input={input}
                  getSelectType={getSelectType}
                />
              </SurveyElement>
            ) : (
              <InputText
                onChange={onChange}
                data={data}
                step={props.step}
                input={input}
                form={props.form}
              />
            )}
          </label>
        ))}
      </SurveyList>
    </div>
  );
}
export default Form;

// Object.assign(source, target) === {...source, target}
