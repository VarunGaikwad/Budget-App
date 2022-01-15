import { useRef } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useBuget } from "../Context/BudgetContext";

export default function AddBudgetModal({ show, onHandleClose }) {
    const nameRef = useRef();
    const maxRef = useRef();
    const { addBudget } = useBuget();
    const onHandleSubmit = (e) => {
        e.preventDefualt()
        addBudget({
            sName: nameRef.current.value,
            nMax: parseFloat(maxRef.current.value)
        });
        onHandleClose()
    }

    return (
        <Modal show={show} onHide={onHandleClose}>
            <Form onSubmit={onHandleSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title> New Budget </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control ref={nameRef} type="text" required></Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="max">
                        <Form.Label>Maximum Spending</Form.Label>
                        <Form.Control ref={maxRef} type="number" min={0} step={0.01}></Form.Control>
                    </Form.Group>
                    <div className="d-flex justify-content-end">
                        <Button varient="primary" type="submit"> Add</Button>
                    </div>
                </Modal.Body>
            </Form>
        </Modal>
    )
}
