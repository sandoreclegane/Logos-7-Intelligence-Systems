import './globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Logos 7 | Human-AI Cooperative',
  description: 'A cooperative for people building Eden 2.0. Where technology serves humanity, decisions stay human, and we recognize Earth is already sacred.',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
