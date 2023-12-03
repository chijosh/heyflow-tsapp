import "./App.css";
import { Container } from "./components/container";
import { CustomInput } from "./components/customInput";

function App() {
  return (
    <div className="App">
      <Container>
        <CustomInput
          properties="ai5678sd"
          placeholder="Property"
          resValue="ai5678sd"
        />
      </Container>
    </div>
  );
}

export default App;
