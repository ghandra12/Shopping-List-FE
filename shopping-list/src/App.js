import "./App.css";
import LoginForm from "./components/LoginForm/LoginForm";
import Container from "@mui/material/Container";

function App() {
  return (
    <div className="root">
      <Container maxWidth="md">
        <LoginForm />
      </Container>
    </div>
  );
}

export default App;
