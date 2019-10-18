import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AppContext } from "../App";
import { SubmitTable, SubmitTableWrapper } from "./styles";

export function Submit(props) {
  const { survey } = props;
  const data = useContext(AppContext);

  if (!data.status || !data.age || !data.salaire) {
    return <Redirect to="/" />;
  }
  let msgThanks =
    "Merci d'avoir rempli le formulaire, nous reviendrons vers vous dans les plus brefs délais";

  const stepsName = [];
  for (let [key, question] of Object.entries(survey)) {
    stepsName[question.position - 1] = key;
  }

  console.log({ stepsName });

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <SubmitTableWrapper>
      <h3>{msgThanks}</h3>
      <SubmitTable>
        {stepsName.map((stepName, i) => (
          <tr>
            <td style={{ fontWeight: "bold" }}>
              {capitalizeFirstLetter(stepName)}
            </td>
            <td>
              {stepName === "age"
                ? data[stepName] + " ans"
                : stepName === "salaire"
                ? data[stepName] + "€"
                : data[stepName]}{" "}
            </td>
          </tr>
        ))}
      </SubmitTable>
    </SubmitTableWrapper>
  );
}

export default Submit;
