import Header from "./Components/header/Header";
import { GlobalStyle } from "./styles/GlobalStyle";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoute from "./routes/AppRoute";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Header />
        <AppRoute />
      </Router>
    </>
  );
}

export default App;
