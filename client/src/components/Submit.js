import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AppContext } from "../App";
import { SubmitTable, SubmitTableWrapper } from "./styles";

export function Submit(props) {
  const { survey } = props;
  const data = useContext(AppContext);

  if (!data[survey.length - 1]) {
    return <Redirect to="/" />;
  }
  let msgThanks =
    "Merci d'avoir rempli le formulaire, nous reviendrons vers vous dans les plus brefs délais";

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <SubmitTableWrapper>
      <h3>{msgThanks}</h3>
      <SubmitTable>
        {survey.map((surveyItem, i) => (
          <tr>
            <td style={{ fontWeight: "bold" }}>
              {capitalizeFirstLetter(surveyItem.name)}
            </td>
            <td>
              {surveyItem.name === "age"
                ? data[i] + " ans"
                : surveyItem.name === "salaire"
                ? data[i] + "€"
                : data[i]}{" "}
            </td>
          </tr>
        ))}
      </SubmitTable>
    </SubmitTableWrapper>
  );
}

export default Submit;
