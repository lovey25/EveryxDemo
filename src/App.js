import { useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const readFileData = async (e) => {
    const reader = new FileReader();

    try {
      const file = e.target.files[0];

      // reader.readAsArrayBuffer(file);
      reader.onload = (result) => {
        console.log("0");
        // result = new Int8Array(result);
        console.log("1", result.target);
        setData(result.target.result);
      };

      reader.readAsText(file);
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <>
      <input
        type="file"
        // accept="image/png, image/jpeg"
        onChange={readFileData}
      />
      <br />
      <br />
      <div>{data}</div>
    </>
  );
}

export default App;
