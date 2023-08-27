import { useState } from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  const [files, setFiles] = useState(window.files);
  api.onGotFiles((newFiles) => {
    setFiles(newFiles);
  });
  if (!files) {
    return <div>loading...</div>;
  }
  return files.map((file) => (
    <img
      key={file}
      style={{ width: "100%" }}
      src={"fewer://" + file}
      loading="lazy"
    />
  ));
};

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);
