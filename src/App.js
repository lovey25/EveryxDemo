import { useState } from "react";

export default function App() {
  const [data, setData] = useState([]);

  const readFileData = async (e) => {
    const reader = new FileReader();

    try {
      reader.onload = (result) => {
        console.log(result);
        let bl = new Int8Array(result.target.result);
        console.log("1", bl);
        setData(bl);
      };

      reader.readAsArrayBuffer(e.target.files[0]);
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <>
      <input type="file" onChange={readFileData} />
      <div>{data}</div>
    </>
  );
}
