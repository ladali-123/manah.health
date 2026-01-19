import WhatsAppButton from "./Components/WhatsappButton";
import AppRouter from "./Utilities/AppRouter";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <AppRouter />
      </Router>
      <WhatsAppButton />
    </div>
  );
}

export default App;
