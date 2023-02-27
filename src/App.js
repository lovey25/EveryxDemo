import { useState } from "react";

const Type = (props) => {
  const [state, setState] = useState("");

  return (
    <div>
      선택:
      <select onChange={(e) => setState(e.target.value)} value={state}>
        <option value="type-1">이건 타입 1번</option>
        <option value="type-2">이건 타입 2번</option>
      </select>
      <div>{props.children(state)}</div>
    </div>
  );
};

const Result = ({ type }) => {
  return <div>{type}</div>;
};

export default function App() {
  return (
    <>
      <Type>{(opt) => <Result type={opt} />}</Type>
    </>
  );
}
