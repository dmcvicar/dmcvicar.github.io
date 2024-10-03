// app/layout.tsx


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="size-full" lang="en">
      <body className="size-full">{children}</body>
    </html>
  );
}
