import "./App.css";
import Logo from "./assets/ECPISeal.png";

function App() {
  return (
    <div>
      <h1>ECPI React Demo</h1>

      {/* Add link takes you to https://www.ecpi.edu/  */}

      <img src={Logo} alt="ECPI Seal" />

      {/* Add link takes you to https://www.ecpi.edu/programs/software-development-bachelor-degree */}

      {/* Add link takes you to https://www.ecpi.edu/how-to-apply*/}
    </div>
  );
}

export default App;
