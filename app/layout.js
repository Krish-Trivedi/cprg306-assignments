import './globals.css';

export const metadata = {
  title: 'CPRG 306 Assignments',
  description: 'Assignments for Web Development 2',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
