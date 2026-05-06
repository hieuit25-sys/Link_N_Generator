import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

interface Link {
  _id: string;
  url: string;
  clicks: number;
}

function AdminPage() {
  const [links, setLinks] = useState<Link[]>([]);
  const [url, setUrl] = useState("");

  const token = localStorage.getItem("token");

  const fetchLinks = async () => {
    const res = await fetch("http://localhost:3000/api/links/all", {
      headers: {
        Authorization: token || ""
      }
    });
    const data = await res.json();
    setLinks(data);
  };

  const addLink = async () => {
    await fetch("http://localhost:3000/api/links/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token || ""
      },
      body: JSON.stringify({ url })
    });

    setUrl("");
    fetchLinks();
  };

  const deleteLink = async (id: string) => {
    await fetch(`http://localhost:3000/api/links/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: token || ""
      }
    });

    fetchLinks();
  };
  
    const navigate = useNavigate();

  useEffect(() => {
  const token = localStorage.getItem("token");
  if (!token) {
    navigate("/admin/login");
  }
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>

      <input
        type="text"
        placeholder="Nhap link"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={addLink}>Them</button>

      <table>
        <thead>
          <tr>
            <th>URL</th>
            <th>Clicks</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {links.map((link) => (
            <tr key={link._id}>
              <td>{link.url}</td>
              <td>{link.clicks}</td>
              <td>
                <button onClick={() => deleteLink(link._id)}>Xoa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminPage;