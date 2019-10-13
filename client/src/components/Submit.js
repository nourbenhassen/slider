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
            <td>{capitalizeFirstLetter(stepName)}</td>
            <td>{data[stepName]}</td>
          </tr>
        ))}
        {/*
          <tr>
          <td>Statut</td>
          <td>{data.status}</td>
        </tr>
        <tr>
          <td>Age</td>
          <td>{data.age}</td>
        </tr>
        <tr>
          <td>Salaire</td>
          <td>{data.salaire}</td>
        </tr>
       */}
      </SubmitTable>
    </SubmitTableWrapper>
  );
}

export default Submit;
