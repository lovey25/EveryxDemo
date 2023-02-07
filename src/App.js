export default function App() {
  async function saveTxtFile() {
    let textArea = document.querySelector("textarea");
    var blob = new Blob([textArea.value], {
      type: "plain/text",
    });
    const fileHandle = await window.showSaveFilePicker({
      suggestedName: "everyx.txt",
    });
    const fileStream = await fileHandle.createWritable();

    await fileStream.write(blob);
    await fileStream.close();
  }

  async function saveBinFile() {
    let textArea = document.querySelector("textarea");
    const arrData = textArea.value.split(",");
    const uint16Data = new Uint16Array(arrData);
    const fileHandle = await window.showSaveFilePicker({
      suggestedName: "everyx.bin",
    });
    const fileStream = await fileHandle.createWritable();
    var blob = new Blob([uint16Data], {
      type: "application/octet-stream",
    });
    await fileStream.write(blob);
    await fileStream.close();
  }

  return (
    <>
      <div>
        <textarea defaultValue={"500, 700, 800, 250"}></textarea>
      </div>
      <button onClick={saveTxtFile}>Save File</button>
      <button onClick={saveBinFile}>Save Bin. File</button>
    </>
  );
}
