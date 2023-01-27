// Uint16 포멧의 바이너리 파일을 불러오는 예제
import { useState } from "react";

export default function App() {
  const [data, setData] = useState([]);

  const readFileData = async (e) => {
    const reader = new FileReader();

    try {
      reader.onload = (result) => {
        let Uint16 = new Uint16Array(result.target.result);
        setData(Array.from(Uint16));
      };
    } catch (err) {
      console.log("err", err);
    }
    reader.readAsArrayBuffer(e.target.files[0]);
  };

  return (
    <>
      <input type="file" onChange={readFileData} />
      <div>
        {data.map((v, i) => (
          <div>
            {i}:{v}
          </div>
        ))}
      </div>
    </>
  );
}
