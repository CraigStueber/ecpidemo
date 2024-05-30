import "./App.css";
import Logo from "./assets/ECPISeal.png";

import Link from "./components/Link/Link";

function App() {
  return (
    <div>
      <h1>ECPI React Demo</h1>
      <Link url={""} text="ECPI HOME" />

      <img src={Logo} alt="ECPI Seal" />
      <Link url={"programs"} text="ECPI Avaialbe Programs" />
      <Link url={"how-to-apply"} text="How to Apply for ECPI" />
    </div>
  );
}

export default App;
