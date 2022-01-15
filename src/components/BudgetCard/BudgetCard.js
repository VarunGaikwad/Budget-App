import { Card } from "react-bootstrap";
import currencyFormatter from "../../util";
export default function BudgetCard({ sName, nAmount, nMax }) {
    return (
        <Card>
            <Card.Body>
                <Card.Title>
                    <div>{sName}</div>
                    <div>{currencyFormatter.format(nAmount)} / {nMax}</div>
                </Card.Title>
            </Card.Body>
        </Card>
    )
}
