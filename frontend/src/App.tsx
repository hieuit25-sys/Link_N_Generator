import { useState } from "react";

function App() {
  const [link, setLink] = useState("");
  const [message, setMessage] = useState("");

  const getLink = async () => {
    try {
      const response = await fetch("http://localhost:3000/get-link");
      const data = await response.json();

      if (data.success) {
        setLink(data.url);
        setMessage("");
      } else {
        setMessage(data.message);
        setLink("");
      }
    } catch (error) {
      setMessage("Khong ket noi duoc backend");
    }
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Link Generator</h1>

      <button onClick={getLink}>Lay Link</button>

      {link && (
        <div style={{ marginTop: "20px" }}>
          <p>Link cua ban:</p>
          <a href={link} target="_blank">
            {link}
          </a>
        </div>
      )}

      {message && (
        <p style={{ color: "red", marginTop: "20px" }}>
          {message}
        </p>
      )}
    </div>
  );
}

export default App;