import Header from "./Header";
import InputGroup from "./InputGroup";
import logo from "./assets/investment-calculator-logo.png"

function App() {
  return (
    <>
      <Header investmentLogo={logo}/>
      <InputGroup/>
    </>
  );
}

export default App;
