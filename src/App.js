import "./App.css";
import { Button, Container, Stack } from "react-bootstrap";
import { useState } from "react";
import BudgetCard from "./components/BudgetCard/BudgetCard";
import AddBudgetModel from "./components/AddBudgetModel/AddBudgetModel";
function App() {
  const [showAddBudgetModel, setShowAddBudgetModel] = useState(false);
  return (
    <div>
      <Container>
        <Stack direction="horizontal" gap="2" className="mb-4">
          <h1 className="me-auto">Budgets</h1>
          <Button varient="primary" onClick={() => setShowAddBudgetModel(true)}>Add Budget</Button>
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
          <BudgetCard cGrey sName="Varun" nAmount={200} nMax={2000}></BudgetCard>
        </div>
      </Container>
      <AddBudgetModel show={showAddBudgetModel} onHandleClose={() => { setShowAddBudgetModel(false) }} />
    </div>
  );
}

export default App;
