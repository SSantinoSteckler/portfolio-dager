import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';

export const metadata: Metadata = {
  title: 'Portfolio Dager',
  description: 'portafolio dager',
};

const PressStart = localFont({
  src: '/fonts/PressStart.woff',
  variable: '--font-press-start',
  weight: '400 700',
});

const Roboto = localFont({
  src: '/fonts/Roboto-Black.woff',
  variable: '--font-roboto',
  weight: '400 700',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${PressStart.variable} ${Roboto.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
