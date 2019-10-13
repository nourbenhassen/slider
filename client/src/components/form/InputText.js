import React from "react";

export function InputText({ onChange, form, step, data }) {
  return (
    <input
      value={typeof data[step] === "number" && data[step]}
      onChange={onChange}
      type="number"
      min={form.option.min || 0}
      max={form.option.max}
    />
  );
}
