"use client";

import { useFormState } from "react-dom";
import { createRow } from "@/app/actions";

const initialState = {
  success: false,
};

function FormApply() {
  const [state, formAction] = useFormState(createRow, initialState);

  return (
    <>
      {state.success === true ? (
        <>
          <h2>Grande!</h2>
          <p>
            <span className="medium">{state.name}</span>
          </p>
          <div className="copy__text__cta">Ti aspettiamo alla festa!</div>
        </>
      ) : state.success === false ? (
        <>
          <h2>Ci sarai? Cele non vede l'ora!</h2>
          <p>
            <span className="medium">Conferma la tua partecipazione.</span>
          </p>
          <div className="copy__text__cta">
            <form action={formAction}>
              <input type="text" name="name" placeholder="Nome e cognome" />
              <button type="submit">Ci sarò!</button>
              <p>{state?.success}</p>
            </form>
          </div>
        </>
      ) : null}
    </>
  );
}

export default FormApply;
