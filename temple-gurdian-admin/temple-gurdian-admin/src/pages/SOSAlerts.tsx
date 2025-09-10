import React from "react";

type AlertType = "Theft" | "Medical";

interface SOSAlert {
  id: number;
  name: string;
  email: string;
  phone: string;
  type: AlertType;
  location: string;
}

const sosAlerts: SOSAlert[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@email.com",
    phone: "+91 9876543210",
    type: "Theft",
    location: "Temple Entrance",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@email.com",
    phone: "+91 9123456780",
    type: "Medical",
    location: "North Hall",
  },
  {
    id: 3,
    name: "Ravi Kumar",
    email: "ravi.kumar@email.com",
    phone: "+91 9988776655",
    type: "Theft",
    location: "Parking Lot",
  },
  {
    id: 4,
    name: "Priya Patel",
    email: "priya.patel@email.com",
    phone: "+91 9001122334",
    type: "Medical",
    location: "Sanctum",
  },
];

const badgeColors: Record<AlertType, { bg: string; color: string }> = {
  Theft: { bg: "#fee2e2", color: "#b91c1c" },
  Medical: { bg: "#d1fae5", color: "#065f46" },
};

const SOSAlerts = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        padding: "2rem 1.5rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <div style={{ width: "100%" }}>
        <h2
          style={{
            fontSize: "2.4rem",
            fontWeight: 700,
            marginBottom: "2rem",
            color: "#1d4ed8",
            letterSpacing: 1,
            textAlign: "center",
          }}
        >
          🚨 SOS Alerts 🚨
        </h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {sosAlerts.map((alert) => (
            <li
              key={alert.id}
              style={{
                background: "#fffbf5", // ✅ menu card background
                borderRadius: 14,
                padding: "1.2rem 1.5rem",
                marginBottom: "1.4rem",
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
                boxShadow: "0 3px 12px rgba(0,0,0,0.1)",
                transition: "transform 0.15s, box-shadow 0.15s",
                cursor: "pointer",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.03)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 3px 12px rgba(0,0,0,0.1)";
              }}
            >
              {/* Avatar Circle */}
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: "50%",
                  background: badgeColors[alert.type].bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontSize: 22,
                  color: badgeColors[alert.type].color,
                  boxShadow: "0 1px 5px rgba(0,0,0,0.1)",
                }}
                title={alert.type}
              >
                {alert.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>

              {/* Details */}
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontWeight: 600,
                    fontSize: "1.2rem",
                    color: "#1e293b",
                    marginBottom: 4,
                  }}
                >
                  {alert.name}
                </div>

                {/* Email + Phone */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    marginBottom: 6,
                    fontSize: "0.9rem",
                    color: "#1e293b",
                  }}
                >
                  <span>📧 {alert.email}</span>
                  <span>📞 {alert.phone}</span>
                </div>

                {/* Type + Location */}
                <div
                  style={{
                    display: "flex",
                    gap: 12,
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      background: badgeColors[alert.type].bg,
                      color: badgeColors[alert.type].color,
                      borderRadius: 6,
                      padding: "2px 10px",
                      fontWeight: 600,
                      fontSize: 13,
                      letterSpacing: 0.5,
                    }}
                  >
                    {alert.type}
                  </span>
                  <span
                    style={{
                      color: "#1e293b",
                      fontSize: 13,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      fill="none"
                      viewBox="0 0 24 24"
                      style={{ marginRight: 4 }}
                    >
                      <path
                        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                        fill="#1d4ed8"
                      />
                    </svg>
                    {alert.location}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SOSAlerts;
