export const metadata = {
  title: "Next Template",
  description:
    "Starting point for creating a NextJS project with jest and typescript",
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
