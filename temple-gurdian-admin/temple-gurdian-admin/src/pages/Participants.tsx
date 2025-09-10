import { useState } from "react";

interface Participant {
  id: number;
  name: string;
  age: number;
  gender: string;
  contact: string;
  address: string;
}

const participants: Participant[] = [
  {
    id: 1,
    name: "John Doe",
    age: 32,
    gender: "Male",
    contact: "9876543210",
    address: "Chennai",
  },
  {
    id: 2,
    name: "Priya Patel",
    age: 28,
    gender: "Female",
    contact: "9123456780",
    address: "Madurai",
  },
  {
    id: 3,
    name: "Ravi Kumar",
    age: 40,
    gender: "Male",
    contact: "9988776655",
    address: "Coimbatore",
  },
  {
    id: 4,
    name: "Meena Iyer",
    age: 35,
    gender: "Female",
    contact: "9001122334",
    address: "Trichy",
  },
];

const Participants = () => {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<keyof Participant | null>(null);
  const [sortAsc, setSortAsc] = useState(true);

  const handleSort = (key: keyof Participant) => {
    if (sortBy === key) {
      setSortAsc(!sortAsc);
    } else {
      setSortBy(key);
      setSortAsc(true);
    }
  };

  const filtered = participants
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (!sortBy) return 0;
      const valA = a[sortBy];
      const valB = b[sortBy];
      if (valA < valB) return sortAsc ? -1 : 1;
      if (valA > valB) return sortAsc ? 1 : -1;
      return 0;
    });

  return (
    <div style={{ maxWidth: 900, margin: "2rem auto", padding: "1.5rem" }}>
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: 700,
          marginBottom: "1rem",
          color: "#0e7490",
          textAlign: "center",
        }}
      >
        Registered Participants
      </h2>

      {/* Search Bar */}
      <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        <input
          type="text"
          placeholder="🔍 Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "10px 14px",
            borderRadius: 8,
            border: "1px solid #94a3b8",
            width: "60%",
            fontSize: "1rem",
            outline: "none",
          }}
        />
      </div>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          background: "#fff",
          borderRadius: 12,
          overflow: "hidden",
          boxShadow: "0 2px 12px 0 rgba(14,116,144,0.08)",
        }}
      >
        <thead style={{ background: "#e0f2fe" }}>
          <tr>
            {["name", "age", "gender", "contact", "address"].map((key) => (
              <th
                key={key}
                onClick={() => handleSort(key as keyof Participant)}
                style={{
                  padding: "12px 10px",
                  fontWeight: 600,
                  color: "#0369a1",
                  textAlign: "left",
                  cursor: "pointer",
                  userSelect: "none",
                }}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}{" "}
                {sortBy === key ? (sortAsc ? "▲" : "▼") : ""}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filtered.length > 0 ? (
            filtered.map((p) => (
              <tr
                key={p.id}
                style={{
                  borderBottom: "1px solid #e0e7ef",
                  transition: "all 0.2s",
                  cursor: "pointer",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.background = "#f0fdfa")
                }
                onMouseOut={(e) => (e.currentTarget.style.background = "#fff")}
                onClick={() => alert(`📌 ${p.name}\n📞 ${p.contact}`)}
              >
                <td style={{ padding: "10px 8px", fontWeight: 500 }}>
                  {p.name}
                </td>
                <td style={{ padding: "10px 8px" }}>{p.age}</td>
                <td style={{ padding: "10px 8px" }}>{p.gender}</td>
                <td
                  style={{
                    padding: "10px 8px",
                    color: "#0e7490",
                    fontWeight: 500,
                  }}
                >
                  {p.contact}
                </td>
                <td style={{ padding: "10px 8px" }}>{p.address}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={5}
                style={{
                  textAlign: "center",
                  padding: "1rem",
                  color: "#64748b",
                  fontStyle: "italic",
                }}
              >
                No participants found ❌
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Participants;
