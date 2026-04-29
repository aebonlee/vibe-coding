import { lazy, Suspense, type ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthGuard from '../components/AuthGuard';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import site from '../config/site';

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const NotFound = lazy(() => import('../pages/NotFound'));

// Auth pages
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const ForgotPassword = lazy(() => import('../pages/ForgotPassword'));
const MyPage = lazy(() => import('../pages/MyPage'));

// Curriculum pages
const CurriculumBeginner = lazy(() => import('../pages/CurriculumBeginner'));
const CurriculumIntermediate = lazy(() => import('../pages/CurriculumIntermediate'));
const CurriculumAdvanced = lazy(() => import('../pages/CurriculumAdvanced'));

// Markdown guide
const MarkdownGuide = lazy(() => import('../pages/MarkdownGuide'));

// Projects
const ProjectsOverview = lazy(() => import('../pages/ProjectsOverview'));
const ProjectsBeginner = lazy(() => import('../pages/ProjectsBeginner'));
const ProjectsIntermediate = lazy(() => import('../pages/ProjectsIntermediate'));
const ProjectsAdvanced = lazy(() => import('../pages/ProjectsAdvanced'));
const ProjectDetail = lazy(() => import('../pages/ProjectDetail'));

// Tools, Bootcamp, Checklist
const ToolComparison = lazy(() => import('../pages/ToolComparison'));
const Bootcamp = lazy(() => import('../pages/Bootcamp'));
const Checklist = lazy(() => import('../pages/Checklist'));

// Community
const Community = lazy(() => import('../pages/Community'));

// Admin
const AdminDashboard = lazy(() => import('../pages/AdminDashboard'));

const Loading = (): ReactElement => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
    <div className="loading-spinner"></div>
  </div>
);

const PublicLayout = (): ReactElement => {
  return (
    <div className="app-layout">
      <Navbar />
      <main className="app-main">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            {site.features.auth && (
              <>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/mypage" element={<AuthGuard><MyPage /></AuthGuard>} />
              </>
            )}

            {/* Curriculum */}
            <Route path="/curriculum/beginner" element={<CurriculumBeginner />} />
            <Route path="/curriculum/intermediate" element={<CurriculumIntermediate />} />
            <Route path="/curriculum/advanced" element={<CurriculumAdvanced />} />

            {/* Markdown */}
            <Route path="/markdown" element={<MarkdownGuide />} />

            {/* Projects */}
            <Route path="/projects" element={<ProjectsOverview />} />
            <Route path="/projects/beginner" element={<ProjectsBeginner />} />
            <Route path="/projects/intermediate" element={<ProjectsIntermediate />} />
            <Route path="/projects/advanced" element={<ProjectsAdvanced />} />
            <Route path="/projects/:level/:slug" element={<ProjectDetail />} />

            {/* Tools, Bootcamp, Checklist */}
            <Route path="/tools" element={<ToolComparison />} />
            <Route path="/bootcamp" element={<Bootcamp />} />
            <Route path="/checklist" element={<Checklist />} />

            {/* Community */}
            <Route path="/community" element={<Community />} />

            {/* Admin */}
            <Route path="/admin" element={<AuthGuard><AdminDashboard /></AuthGuard>} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
