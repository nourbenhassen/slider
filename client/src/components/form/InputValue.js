import React from "react";
import { InputValueElement } from "../styles";

export function InputValue({ onChange, form, step, data }) {
  return (
    <InputValueElement
      value={typeof data[step] === "number" && data[step]}
      onChange={onChange}
      type="number"
      min={form.option.min || 0}
      max={form.option.max}
    />
  );
}
