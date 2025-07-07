import React from "react";

export default function Footer() {
  return (
    <footer style={{
      textAlign: "center",
      padding: "16px 0",
      borderTop: "2px solid #000",
      fontSize: "12px",
      textTransform: "uppercase",
      backgroundColor: "#fff",
      marginTop: "60px"
    }}>
      © {new Date().getFullYear()} Shehab Radwan. All rights reserved.
    </footer>
  );
}
