import { Button, Card, ProgressBar, Stack } from "react-bootstrap";
import currencyFormatter from "../../util";
export default function BudgetCard({ sName, nAmount, nMax, cGrey }) {
    const className = [];
    if (nAmount > nMax) {
        className.push("bg-danger", "bg-opacity-10");
    } else if (cGrey) {
        className.push("bg-light");
    }
    return (
        <Card className={className.join(" ")}>
            <Card.Body>
                <Card.Title className="d-flex justify-content-between align-items-baseline fw-normal">
                    <div className="me-2">{sName}</div>
                    <div className="d-flex align-items-baseline">{currencyFormatter.format(nAmount)}
                        <span className="text-muted fs-6 ms-1">/ {currencyFormatter.format(nMax)}</span> </div>
                </Card.Title>
                <ProgressBar className="rounded-pill" variant={getProgressBarVarient(nAmount, nMax)} min={0} max={nMax} now={nAmount}>

                </ProgressBar>
                <Stack direction="horizontal" gap="2" className="mt-4">
                    <Button varient="outline-primary" className="ms-auto">Add Expense</Button>
                    <Button varient="outline-secondary">View Expense</Button>
                </Stack>
            </Card.Body>
        </Card >
    )
}

const getProgressBarVarient = (nAmount, nMax) => {
    const ratio = nAmount / nMax;
    if (ratio < .5) return "primary";
    if (ratio < .75) return "warning";
    return "danger";
}