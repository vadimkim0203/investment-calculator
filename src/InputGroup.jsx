import { useState } from "react";

export default function InputGroup() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
      return {...prevUserInput, }
    })
  }

  return (
    <section id="user-input">
      <p id="input-group">
        <label id="user-input label">Initial investment</label>
        <input type="number" required />
      </p>

      <p id="input-group">
        <label id="user-input label">Expected return</label>
        <input type="number" required />
      </p>
      <p id="input-group">
        <label id="user-input label">Annual investment</label>
        <input type="number" required />
      </p>
      <p id="input-group">
        <label id="user-input label">Duration</label>
        <input type="number" required />
      </p>
    </section>
  );
}
