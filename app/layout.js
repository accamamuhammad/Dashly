import "./globals.css";

export const metadata = {
  title: "Dashly",
  description: "Data Data Data",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
