import React, { useState } from 'react'
import ChildComp from './ChildComp'


 function ParentComp() {
  const [data, setData] = useState([]);
  const [info, setInfo] = useState("");
  const dataChange = () => {
    setData([
      { name: "Shirisha", id: 1 },
      {
        name: "Prashanth",
        id: 2,
      },
      {
        name: "Ashok",
        id: 3,
      },
      {
        name: "Maheswary",
        id: 4,
      },
    ]);
  };
  const ChildData = (value) => {
    setInfo(value);
  };

  return (
    <div className="ParentComp">
      {data.length > 0 &&
        data.map(({ id, name }) => (
          <tr style={{ border: "1px solid black" }}>
            <td style={{ border: "1px solid black" }}>{id}</td>
            <td style={{ border: "1px solid black" }}>{name}</td>
          </tr>
        ))}
      <h1> {info}</h1>
      <ChildComp parentMessage={dataChange} parentData={ChildData} />
    </div>
  );
}
export default ParentComp;
