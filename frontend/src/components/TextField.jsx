import React from "react";
import "./TextField.css";

function TextField({ Label, Placeholder = "", Type = "text"}) {
  return (
    <>
      <div className="m-3">
        <label className="label">{Label}</label>
        <input type={Type} className="form-control textField" placeholder={Placeholder} />
      </div>
    </>
  );
}

export default TextField;
