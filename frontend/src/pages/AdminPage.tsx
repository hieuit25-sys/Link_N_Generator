import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Link {
  _id: string;
  url: string;
  clicks: number;
}

function AdminPage() {
  const [links, setLinks] = useState<Link[]>([]);
  const [url, setUrl] = useState("");

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  // Lay danh sach links
  const fetchLinks = async () => {
    try {
      const res = await fetch(
        "http://localhost:3000/api/links/all",
        {
          headers: {
            Authorization: token || ""
          }
        }
      );

      const data = await res.json();

      setLinks(data);
    } catch (error) {
      console.log("Loi fetch links:", error);
    }
  };

  // Them link
  const addLink = async () => {
    if (!url) return;

    try {
      await fetch(
        "http://localhost:3000/api/links/add",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            Authorization: token || ""
          },

          body: JSON.stringify({
            url
          })
        }
      );

      setUrl("");

      fetchLinks();
    } catch (error) {
      console.log("Loi them link:", error);
    }
  };

  // Xoa link
  const deleteLink = async (id: string) => {
    try {
      await fetch(
        `http://localhost:3000/api/links/${id}`,
        {
          method: "DELETE",

          headers: {
            Authorization: token || ""
          }
        }
      );

      fetchLinks();
    } catch (error) {
      console.log("Loi xoa link:", error);
    }
  };

  // Kiem tra login + load data
  useEffect(() => {
    // if (!token) {
    //   navigate("/admin/login");
    //   return;
    // }

    fetchLinks();
  }, [navigate]);

  return (
    <div>
      <h2>Admin Dashboard</h2>

      <input
        type="text"
        placeholder="Nhap link"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <button onClick={addLink}>
        Them
      </button>

      <table border={1}>
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
                <button
                  onClick={() =>
                    deleteLink(link._id)
                  }
                >
                  Xoa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminPage;