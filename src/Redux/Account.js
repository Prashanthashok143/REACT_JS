import React from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

const Account = () => {
  let Data = useSelector((state) => {
    return state;
  });
  return (
    <div>
      <div>
        <Table striped bordered hover style={{ textAlign: "center" }}>
          <thead>
            <tr>
              <th>AccountBal</th>
              <th>Name</th>
              <th>Mobile</th>
              <th>Inc/Dec</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{Data.AccountBal}</td>
              <td>{Data.Name}</td>
              <td>{Data.Mobile}</td>
              <td>{Data.Counter}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Account;
