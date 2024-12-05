import "./globals.css";

export const metadata = {
  title: "Url Shortener",
  description: "Generate short url from long url",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
