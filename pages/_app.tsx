import type { AppProps } from 'next/app';
import localFont from '@next/font/local';
import { Inter } from '@next/font/google';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });
const clashDisplay = localFont({
  src: [
    {
      path: '../public/fonts/ClashDisplay-Semibold.woff2',
      weight: '600',
    },
  ],
});

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <style jsx global>{`
        :root {
          --clash-display-font: ${clashDisplay.style.fontFamily};
          --inter-font: ${inter.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
