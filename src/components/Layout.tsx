import type { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import SEO from './SEO';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <SEO />
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}
