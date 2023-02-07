export default function App() {
  async function saveFile() {
    let textArea = document.querySelector("textarea");
    var taBlob = new Blob([textArea.value], {
      type: "application/octet-stream",
    });
    const fileHandle = await window.showSaveFilePicker();
    const fileStream = await fileHandle.createWritable();

    await fileStream.write(taBlob);
    await fileStream.close();
  }

  async function saveBinFile() {
    let textArea = document.querySelector("textarea");
    const data = textArea.value.split(",");
    const test = new Uint16Array(data);
    const fileHandle = await window.showSaveFilePicker();
    const fileStream = await fileHandle.createWritable();
    var taBlob = new Blob([test], {
      type: "application/octet-stream",
    });
    await fileStream.write(taBlob);
    await fileStream.close();
  }

  return (
    <>
      <div>
        <textarea defaultValue={"500, 700, 800, 250"}></textarea>
      </div>
      <button className="save-file" onClick={saveFile}>
        Save File
      </button>
      <button className="save-file" onClick={saveBinFile}>
        Save Bin. File
      </button>
    </>
  );
}
