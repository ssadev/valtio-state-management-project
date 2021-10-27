import React from "react";
import { useSnapshot } from "valtio";
import { state } from "../../store/state";

export default function SubmitButton() {
  const snap = useSnapshot(state);
  return (
    <>
      <button
        type="submit"
        className="btn btn-primary"
        onClick={() =>
          snap.formSubmited
            ? (state.formSubmited = false)
            : (state.formSubmited = true)
        }
      >
        Submit
      </button>
    </>
  );
}
