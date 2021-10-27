import React from "react";
import { useSnapshot } from "valtio";
import { state } from "../../store/state";
import AgreedCheckbox from "./AgreedCheckbox";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import SubmitButton from "./SubmitButton";

export default function FormContainer() {
  const snap = useSnapshot(state);
  //   const handleFormInput = (e) => {
  //     let inpVal = e.target.value;
  //     let inpName = e.target.name;
  //     console.log(inpName, inpVal);
  //     state[inpName] = inpVal;
  //   };
  //   const handleFormCheckBox = (e) => {
  //     let inpVal = e.target.checked;
  //     let inpName = e.target.name;
  //     console.log(inpName, inpVal);
  //     state[inpName] = inpVal;
  //   };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (state.agreed) console.log("Form Submited!", snap);
    return snap;
  };
  return (
    <form onSubmit={(e) => handleFormSubmit(e)}>
      <EmailInput />
      <PasswordInput />
      <AgreedCheckbox />
      <SubmitButton />
    </form>
  );
}
