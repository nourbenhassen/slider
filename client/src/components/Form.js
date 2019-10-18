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

export function Form({ error, setError, form, isValueValid, position }) {
  const data = useContext(AppContext);
  console.log(form, position, data);
  const getSelectType = () =>
    form.option && form.option["multiple-choice"] ? "checkbox" : "radio";
  const onChange = e => {
    setError("");
    if (form.type === "select" && getSelectType() === "checkbox") {
      // If multiple choice true
    } else {
      const newData =
        form.type === "input" ? parseInt(e.target.value) : e.target.value;
      isValueValid(!!newData || newData === 0);
      data.setData(newData, position - 1); //setData is Coming from context
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
                  if (data[position - 1] === input.value) return "active";
                })()}
              >
                {input.label}
                <Select
                  onChange={onChange}
                  data={data}
                  position={position}
                  input={input}
                  getSelectType={getSelectType}
                />
                <ValidateSelect visible={data[position - 1] === input.label}>
                  <Validate />
                </ValidateSelect>
              </SurveyElement>
            ) : (
              <InputListElement>
                <InputValue
                  onChange={onChange}
                  data={data}
                  position={position}
                  input={input}
                  form={form}
                />
                <ValidateSelect
                  visible={!!data[position - 1] || data[position - 1] === 0}
                >
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
