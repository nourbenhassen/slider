import React from "react";
import { InputValueElement } from "../styles";

export function InputValue({ onChange, form, position, data }) {
  return (
    <InputValueElement
      value={typeof data[position - 1] === "number" && data[position - 1]}
      onChange={onChange}
      type="number"
      min={form.option.min || 0}
      max={form.option.max}
    />
  );
}
