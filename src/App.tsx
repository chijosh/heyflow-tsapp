import "./App.css";
import { Container } from "./components/container";
import { InfoPane } from './components/info';

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
