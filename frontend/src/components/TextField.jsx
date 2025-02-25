import React from "react";
import "./TextField.css";

function TextField({ Label, Placeholder = "" }) {
  return (
    <>
      <div className="m-3">
        <label className="label">{Label}</label>
        <input type="text" className="form-control" />
      </div>
    </>
  );
}

export default TextField;
