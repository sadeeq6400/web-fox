import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layout
import MainLayout from '../components/layout/MainLayout';

// Pages
import Home from '../pages/Home';
import Explore from '../pages/Explore';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ForgotPasswordPage from '../pages/auth/ForgotPasswordPage';
import ResetPasswordPage from '../pages/auth/ResetPasswordPage';
import Dashboard from '../pages/Dashboard';
import CampaignDetails from '../pages/CampaignDetails';
import CreateCampaign from '../pages/CreateCampaign';
import Admin from '../pages/Admin';
import NotFound from '../pages/NotFound';

// Test Component
import ErrorTest from '../components/common/ErrorTest';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="forgot-password" element={<ForgotPasswordPage />} />
          <Route path="reset-password/:token" element={<ResetPasswordPage />} />
          <Route path="admin" element={<Admin />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="explore" element={<Explore />} />
          <Route path="campaign/:id" element={<CampaignDetails />} />
          <Route path="create" element={<CreateCampaign />} />
          <Route path="test-error" element={<ErrorTest />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
