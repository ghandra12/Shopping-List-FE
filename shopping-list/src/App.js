import logo from "./logo.svg";
import "./App.css";
import LoginForm from "./components/LoginForm";
import Container from "@mui/material/Container";

function App() {
  return (
    <Container maxWidth="md">
      <LoginForm />
    </Container>
  );
}

export default App;
