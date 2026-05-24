import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ContentProvider } from './context/ContentContext';
import { AuthProvider } from './context/AuthContext';
import { LanguageProvider } from './context/LanguageContext';

import PublicLayout from './layouts/PublicLayout';
import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import NewsDetail from './pages/NewsDetail';

import Login from './cms/Login';
import AdminLayout from './cms/AdminLayout';
import Dashboard from './cms/Dashboard';
import ProtectedRoute from './cms/ProtectedRoute';
import EditHero from './cms/editors/EditHero';
import EditAbout from './cms/editors/EditAbout';
import EditProcess from './cms/editors/EditProcess';
import EditFacilities from './cms/editors/EditFacilities';
import EditProducts from './cms/editors/EditProducts';
import EditNews from './cms/editors/EditNews';
import EditContact from './cms/editors/EditContact';
import EditSections from './cms/editors/EditSections';
import EditNavbar from './cms/editors/EditNavbar';
import EditSettings from './cms/editors/EditSettings';
import EditPartners from './cms/editors/EditPartners';
import EditAwards from './cms/editors/EditAwards';
import EditRoadmap from './cms/editors/EditRoadmap';
import EditContribute from './cms/editors/EditContribute';

export default function App() {
  return (
    <ContentProvider>
    <LanguageProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* Public website — Navbar & Footer di semua halaman */}
            <Route element={<PublicLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/berita" element={<NewsPage />} />
              <Route path="/berita/:id" element={<NewsDetail />} />
            </Route>

            {/* CMS Login */}
            <Route path="/admin" element={<Login />} />

            {/* CMS Protected */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminLayout />
                </ProtectedRoute>
              }
            >
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="hero" element={<EditHero />} />
              <Route path="about" element={<EditAbout />} />
              <Route path="process" element={<EditProcess />} />
              <Route path="facilities" element={<EditFacilities />} />
              <Route path="products" element={<EditProducts />} />
              <Route path="news" element={<EditNews />} />
              <Route path="contact" element={<EditContact />} />
              <Route path="sections" element={<EditSections />} />
              <Route path="navbar" element={<EditNavbar />} />
              <Route path="settings" element={<EditSettings />} />
              <Route path="partners" element={<EditPartners />} />
              <Route path="awards" element={<EditAwards />} />
              <Route path="roadmap" element={<EditRoadmap />} />
              <Route path="contribute" element={<EditContribute />} />
            </Route>

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </LanguageProvider>
    </ContentProvider>
  );
}
