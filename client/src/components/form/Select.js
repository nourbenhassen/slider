import React from "react";
import { SelectElement } from "../styles";

export function Select({ onChange, data, position, input, getSelectType }) {
  return (
    <SelectElement
      value={input.value}
      checked={data[position - 1] === input.value}
      onChange={onChange}
      name={"select-group"}
      type={getSelectType()}
    />
  );
}
