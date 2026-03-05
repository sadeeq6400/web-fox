import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './Navbar';
import Footer from './Footer';

/**
 * MainLayout
 * Wraps every public page with the sticky Navbar and Footer.
 * Usage in AppRouter.jsx:
 *
 *   <Route element={<MainLayout />}>
 *     <Route path="/"        element={<Home />} />
 *     <Route path="/explore" element={<Explore />} />
 *     …
 *   </Route>
 */
export default function MainLayout() {
  return (
    <>
      <style>{`
        .ml-root {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
        .ml-main {
          flex: 1;
        }
      `}</style>

      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3500,
          style: {
            border: '1px solid #e5e7eb',
            background: '#ffffff',
            color: '#0F172A',
            borderRadius: '8px',
            fontFamily: "'Poppins', sans-serif",
            fontSize: '.875rem',
            boxShadow:
              '0 10px 15px -3px rgba(15,23,42,.1), 0 4px 6px -4px rgba(15,23,42,.1)',
          },
          success: {
            iconTheme: { primary: '#10B981', secondary: '#ffffff' },
            style: { borderColor: '#10B981' },
          },
          error: {
            iconTheme: { primary: '#EF4444', secondary: '#ffffff' },
            style: { borderColor: '#EF4444' },
          },
          loading: {
            iconTheme: { primary: '#6366F1', secondary: '#ffffff' },
            style: { borderColor: '#6366F1' },
          },
        }}
      />

      <div className="ml-root">
        <Navbar />
        <main className="ml-main">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}