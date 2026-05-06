import "./globals.css";

export const metadata = {
  title: "Knowledge Cloud",
  description: "A cloud-native learning platform foundation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
