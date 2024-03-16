import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  Deposit,
  Withdraw,
  Name,
  Mobile,
  Increment,
  Decrement,
} from "./Actions";
const FormData = () => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);
  const [name, setName] = useState("");
  const [mobile, setmobile] = useState("");
  return (
    <div className="m-1 rounded border border-5 border-danger">
      <div className="w-25 m-4">
        <Form.Control
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter the amount"
        />
        <Button
          variant="primary"
          onClick={() => dispatch(Deposit(amount), setAmount(""))}
        >
          Deposit
        </Button>
        <Button
          variant="dark"
          onClick={() => dispatch(Withdraw(amount), setAmount(""))}
        >
          Withdraw
        </Button>
      </div>
      <div className="w-25 m-4">
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter the Name"
        />
        <Button
          variant="success"
          onClick={() => dispatch(Name(name), setName(""))}
        >
          UpdateName
        </Button>
      </div>
      <div className="w-25 m-4">
        <Form.Control
          type="number"
          value={mobile}
          onChange={(e) => setmobile(e.target.value)}
          placeholder="Enter the MobileNo"
        />
        <Button
          variant="secondary"
          onClick={() => dispatch(Mobile(mobile), setmobile(""))}
        >
          UpdateMobile
        </Button>
      </div>

      <div className="m-4 w-25 row border border-dark">
        <div class="col">
          <Button variant="warning" onClick={() => dispatch(Increment())}>
            Increment
          </Button>
        </div>
        <div class="col">
          {" "}
          <Button variant="success" onClick={() => dispatch(Decrement())}>
            Decrement
          </Button>
        </div>
      </div>
      <div className="m-4">
        <Button variant="danger" onClick={() => dispatch({ type: "reset" })}>
          Reset
        </Button>
      </div>
    </div>
  );
};

export default FormData;
