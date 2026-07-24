import './globals.css';

export const metadata = {
  title: 'Joshua Portfolio',
  description: 'Modern UI/UX portfolio built with Next.js, theme toggle, real project content, and motion.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
