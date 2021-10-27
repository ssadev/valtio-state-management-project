import React from "react";
import { useSnapshot } from "valtio";
import { state } from "../../store/state";

export default function AgreedCheckbox() {
  const snap = useSnapshot(state);
  const handleFormCheckBox = (e) => {
    let inpVal = e.target.checked;
    let inpName = e.target.name;
    console.log(inpName, inpVal);
    state[inpName] = inpVal;
  };
  return (
    <div className="mb-3 form-check">
      <input
        type="checkbox"
        className="form-check-input"
        id="exampleCheck1"
        checked={snap.agreed}
        name="agreed"
        onChange={(e) => handleFormCheckBox(e)}
      />
      <label className="form-check-label" htmlFor="exampleCheck1">
        Check me out
      </label>
    </div>
  );
}
