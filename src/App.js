import "./App.css";
import { Button, Container, Stack } from "react-bootstrap";
import BudgetCard from "./components/BudgetCard/BudgetCard";
function App() {
  return (
    <Container>
      <Stack direction="horizontal" gap="2" className="mb-4">
        <h1 className="me-auto">Budgets</h1>
        <Button varient="primary">Add Budget</Button>
        <Button varient="outline-primary">Add Expense</Button>
      </Stack>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))",
          gap: "1rem",
          alignItems: "flex-start",
        }}
      >
        <BudgetCard sName="Varun" nAmount={1000} nMax={2000}></BudgetCard>
      </div>
    </Container>
  );
}

export default App;
