import React, { useState } from "react";
import { Link } from "react-router-dom";

function Request() {
  const [name, setName] = useState();
  const [dosage, setDosage] = useState();

  const sendRequest = (e) => {
    setName("");
    setDosage("");

  };
  return (
    <div class="request">
      <div class="request__container">
        <h1>Request</h1>
        <h5>Name of Medicine</h5>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <h5>Dosage</h5>
        <input
          type="text"
          value={dosage}
          onChange={(e) => setDosage(e.target.value)}
        />

        <button type="submit" onClick={sendRequest} className="request__button">
          <Link className="link" to="/ThanksR">
            <strong>REQUEST</strong>
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Request;
