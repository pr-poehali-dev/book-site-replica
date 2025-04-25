
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import CategoryPage from './pages/CategoryPage';
import WarhammerHomePage from './pages/WarhammerHomePage';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import BooksManagement from './pages/admin/BooksManagement';
import CategoriesManagement from './pages/admin/CategoriesManagement';
import SeriesManagement from './pages/admin/SeriesManagement';
import UserManagement from './pages/admin/UserManagement';
import StatsManagement from './pages/admin/StatsManagement';
import WarhammerAdminDashboard from './pages/admin/WarhammerAdminDashboard';
import WarhammerAdminLogin from './pages/admin/WarhammerAdminLogin';
import AudiobookHomePage from './pages/AudiobookHomePage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Основные маршруты */}
        <Route path="/" element={<Index />} />
        <Route path="/category/:categoryId" element={<CategoryPage />} />
        <Route path="/audibooks" element={<AudiobookHomePage />} />
        
        {/* Warhammer маршруты */}
        <Route path="/warhammer" element={<WarhammerHomePage />} />
        
        {/* Административные маршруты */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/books" element={<BooksManagement />} />
        <Route path="/admin/categories" element={<CategoriesManagement />} />
        <Route path="/admin/series" element={<SeriesManagement />} />
        <Route path="/admin/users" element={<UserManagement />} />
        <Route path="/admin/stats" element={<StatsManagement />} />
        
        {/* Warhammer административные маршруты */}
        <Route path="/warhammer/admin/login" element={<WarhammerAdminLogin />} />
        <Route path="/warhammer/admin/dashboard" element={<WarhammerAdminDashboard />} />
        
        {/* Маршрут 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
