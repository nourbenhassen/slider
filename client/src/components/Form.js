import React, { useContext } from "react";
import { AppContext } from "../App";
import { InputValue } from "./form/InputValue";
import { Select } from "./form/Select";
import {
  SurveyList,
  SurveyElement,
  FormWrapper,
  ValidateSelect,
  Validate,
  ValidateInput,
  InputListElement,
  Error,
} from "./styles";

export function Form({ error, setError, form, step, isValueValid }) {
  const data = useContext(AppContext);
  const getSelectType = () =>
    form.option && form.option["multiple-choice"] ? "checkbox" : "radio";
  const onChange = e => {
    setError("");
    if (form.type === "select" && getSelectType() === "checkbox") {
      // If multiple choice true
    } else {
      const newData = {};
      newData[step] =
        form.type === "select" ? e.target.value : parseInt(e.target.value, 10);
      isValueValid(!!newData[step] || newData[step] === 0);
      data.setData(newData);
    }
  };

  return (
    <FormWrapper>
      <h4>{form.type === "select" ? form.label : form.data[0].label}</h4>
      <SurveyList>
        {form.data.map((input, key) => (
          <label>
            {form.type === "select" ? (
              <SurveyElement
                key={key}
                className={(() => {
                  if (error) return "error";
                  if (data[step] === input.value) return "active";
                })()}
              >
                {input.label}
                <Select
                  onChange={onChange}
                  data={data}
                  step={step}
                  input={input}
                  getSelectType={getSelectType}
                />
                <ValidateSelect visible={data[step] === input.label}>
                  <Validate />
                </ValidateSelect>
              </SurveyElement>
            ) : (
              <InputListElement>
                <InputValue
                  onChange={onChange}
                  data={data}
                  step={step}
                  input={input}
                  form={form}
                />
                <ValidateSelect visible={!!data[step] || data[step] === 0}>
                  <ValidateInput />
                </ValidateSelect>
              </InputListElement>
            )}
          </label>
        ))}
      </SurveyList>
      <Error>{error}</Error>
    </FormWrapper>
  );
}
export default Form;

// Object.assign(source, target) === {...source, target}
