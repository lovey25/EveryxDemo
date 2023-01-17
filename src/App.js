export default function App() {
  const onClick = () => {
    var tempLink = document.createElement("a");
    let textArea = document.querySelector("textarea");
    var taBlob = new Blob([textArea.value], { type: "text/plain" });
    tempLink.setAttribute("href", URL.createObjectURL(taBlob));
    tempLink.setAttribute("download", `everyx.txt`);
    tempLink.click();
    URL.revokeObjectURL(tempLink.href);
  };

  return (
    <>
      <div>
        <textarea></textarea>
      </div>
      <button className="save-file" onClick={onClick}>
        Save File
      </button>
      <a className="simple" style={{ display: "none" }}>
        Download Multi-line Text File (Blob)
      </a>
    </>
  );
}
