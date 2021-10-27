import React from "react";
import { useSnapshot } from "valtio";
import { state } from "../../store/state";

export default function PasswordInput() {
  const snap = useSnapshot(state);
  const handleFormInput = (e) => {
    let inpVal = e.target.value;
    let inpName = e.target.name;
    console.log(inpName, inpVal);
    state[inpName] = inpVal;
  };
  return (
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">
        Password
      </label>
      <input
        type="password"
        className="form-control"
        id="exampleInputPassword1"
        name="password"
        value={snap.password}
        onChange={(e) => handleFormInput(e)}
      />
    </div>
  );
}
