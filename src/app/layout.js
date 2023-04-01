import Footer from '@/components/Footer';
import './globals.css';

export const metadata = {
  title: 'Google',
  description: 'Google create by arsham ghobadi',
};

export default function RootLayout({ children }) {
  return (
    <html className=" h-screen" lang="en">
      <body className="h-screen">
        {children}
        <Footer />
      </body>
    </html>
  );
}
