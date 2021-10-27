import React from "react";
import { useSnapshot } from "valtio";
import { state } from "../../store/state";

export default function EmailInput() {
  const snap = useSnapshot(state);
  const handleFormInput = (e) => {
    let inpVal = e.target.value;
    let inpName = e.target.name;
    console.log(inpName, inpVal);
    state[inpName] = inpVal;
  };
  return (
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">
        Email address
      </label>
      <input
        type="text"
        name="email"
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        onChange={(e) => handleFormInput(e)}
        value={snap.email}
      />
      <div id="emailHelp" className="form-text">
        We'll never share your email with anyone else.
      </div>
    </div>
  );
}
