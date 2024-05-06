import "./globals.css";

export const metadata = {
  title: "Celeste - Baby Shower",
  description: "Pannolini, unicorni e drink! Siamo pronte per festeggiare l'arrivo di Celeste! Desscode: 🦄 UNICORNI! 🦄",
  openGraph: {
    images: ['/shareimg.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body >{children}</body>
    </html>
  );
}

