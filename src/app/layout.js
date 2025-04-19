import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        {/* added inline css- its optional, ican change it to tailwind. */}
        <footer style={{
          marginTop: "3rem",
          padding: "1.5rem 0",
          textAlign: "center",
          borderTop: "1px solid #e5e5e5",
          fontSize: "1.05rem",
          color: "#666"
        }}>
          Created by Rahul Chowdhury
        </footer>
      </body>
    </html>
  );
}