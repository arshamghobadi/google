import './globals.css';

export const metadata = {
  title: 'Google',
  description: 'Google create by arsham ghobadi',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
