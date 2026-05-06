import { useState } from "react";

function App() {
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);

  const getLink = async () => {
    setLoading(true);

    setTimeout(async () => {
      const res = await fetch("http://localhost:3000/api/links/get-link");
      const data = await res.json();

      if (data.success) setLink(data.url);
      else alert(data.message);

      setLoading(false);
    }, 3000);
  };

  return (
    <div className="container">
      <h2>Lay link Netflix</h2>

      <div className="box">
        {link && <p>{link}</p>}
      </div>

      <button onClick={getLink} disabled={loading}>
        {loading ? "Dang tai..." : "Lay link"}
      </button>
    </div>
  );
}

export default App;