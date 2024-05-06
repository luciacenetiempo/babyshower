import { useActionState } from "react";

import { getSheetsData } from "./../_lib/readSheet";

const [formState, formAction] = useActionState(addToCart, {});

const confirm = (formData) => {
};
function FormApply() {
  async function createRow(formData) {
    "use server";
    const data = await getSheetsData(formData.get("name"));
    if (data == "200") {
      confirm();
    }
  }
  return (
    <form action={createRow}>
      <input type="text" name="name" placeholder="Nome e cognome" />
      <button type="submit">Ci sarò!</button>
    </form>
  );
}

export default FormApply;
