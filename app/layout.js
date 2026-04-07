export const metadata = {
  title: "Astrovia Enterprise",
  description: "Astrovia Enterprise delivers software solutions, fintech integrations, IT support, and digital systems for modern businesses.",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
