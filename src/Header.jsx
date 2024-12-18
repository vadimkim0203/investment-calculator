export default function Header({ investmentLogo }) {
  return (
    <header id="header">
      <img 
        id="header img"
        src={investmentLogo}
        alt="Investment calculator logo"
      />
      <h1 id="header h1">React Investment Calculator</h1>
    </header>
  );
}
