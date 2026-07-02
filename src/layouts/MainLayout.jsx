import Header from '../components/Header';
import Footer from '../components/Footer';

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-bg-main text-fg-main selection:bg-lime-accent selection:text-fg-main flex flex-col">
      {/* Top sticky brand header */}
      <Header />
      
      {/* Central application layer context */}
      <main className="flex-1 mx-auto w-full max-w-5xl">
        {children}
      </main>

      {/* Structural system status footer */}
      <Footer />
    </div>
  );
}