import React from "react";
import { SelectElement } from "../styles";

export function Select({ onChange, data, step, input, getSelectType }) {
  return (
    <SelectElement
      value={input.value}
      checked={data[step] === input.value}
      onChange={onChange}
      name={"select-group"}
      type={getSelectType()}
    />
  );
}
