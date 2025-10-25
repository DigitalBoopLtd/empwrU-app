import './globals.css';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400','500','600','700'], display: 'swap' });

export const metadata = {
  title: 'empwrU Vibe Kit',
  description: 'Brand gradient background',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>
        <div className="bg-app">
          {children}
        </div>
      </body>
    </html>
  );
}


