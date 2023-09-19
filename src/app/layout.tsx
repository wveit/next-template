export const metadata = {
  title: "CMR client",
  description: "Browse NASA Common Metadata Repository (CMR)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
