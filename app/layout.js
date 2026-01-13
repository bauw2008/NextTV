import './globals.css';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const metadata = {
  title: 'StreamBox - 影视无限',
  description: 'StreamBox 影视播放平台',
  other: {
    'preconnect-googleapis': 'https://fonts.googleapis.com',
    'preconnect-gstatic': 'https://fonts.gstatic.com',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Spline+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
      </head>
      <body className="bg-background-light font-display text-gray-900 min-h-screen flex flex-col selection:bg-primary selection:text-white">
        <Navbar />
        <main className="flex-1 flex flex-col items-center w-full px-4 md:px-8 pb-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
