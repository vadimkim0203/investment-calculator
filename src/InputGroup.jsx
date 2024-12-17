import { useState } from "react";

export default function InputGroup() {
  useState();

  return (
    <div id="user-input">
      <div id="">
        <h3 id="user-input label">Initial investment</h3>
        <input type="text" />
      </div>

      <div id="input-group">
        <h3 id="user-input label">Expected return</h3>
        <input type="text" />
      </div>
      <div id="input-group">
        <h3 id="user-input label">Annual investment</h3>
        <input type="text" />
      </div>
      <div id="input-group">
        <h3 id="user-input label">Duration</h3>
        <input type="text" />
      </div>
    </div>
  );
}
