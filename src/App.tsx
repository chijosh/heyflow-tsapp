import "./App.css";
import { Container } from "./components/container";
import { InfoPane } from "./components/infoPane";

function App() {
  return (
    <div className="App">
      <Container>
        <InfoPane />
      </Container>
    </div>
  );
}

export default App;
