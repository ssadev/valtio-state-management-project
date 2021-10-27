import React from "react";
import { useSnapshot } from "valtio";
import { state } from "../store/state";

export default function FormDataDisplay() {
  const snap = useSnapshot(state);
  const { formSubmited } = snap;

  return (
    <div className="mt-3">
      <span class="badge bg-dark">Global State : </span>
      <div className={`p-3 ${formSubmited ? "bg-info" : "bg-light"}`}>
        <pre>
          <code>{JSON.stringify(snap)}</code>
        </pre>
      </div>
    </div>
  );
}
