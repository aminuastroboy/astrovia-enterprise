import "./globals.css";

export const metadata = {
  title: "Astrovia Enterprise",
  description: "Astrovia Enterprise delivers modern software, fintech integrations, and IT support for businesses.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
