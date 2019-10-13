import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AppContext } from "../App";

export function Submit(props) {
  const data = useContext(AppContext);
  if (!data.status || !data.age || !data.salaire) {
    return <Redirect to="/" />;
  }
  let msgThanks =
    "Merci d'avoir rempli le formulaire, nous reviendrons vers vous dans les plus brefs délais";
  return (
    <div>
      <h3>{msgThanks}</h3>
      <table>
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
      </table>
    </div>
  );
}

export default Submit;

//Tableau recensant toutes les valeurs
