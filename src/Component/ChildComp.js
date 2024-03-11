import React from "react";

const ChildComp = (props) => {
  const [data, setData] = React.useState("");
  const change = (e) => {
    props.parentMessage();
    props.parentData(data);
    setData("");
  };
  return (
    <div>
      <input
        type="text"
        value={data}
        onChange={(event) => setData(event.target.value)}
      />

      <button onClick={change}>Submit</button>
    </div>
  );
};
export default ChildComp;
