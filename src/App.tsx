
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import CategoryPage from "./pages/CategoryPage";
import CategoriesManagement from "./pages/admin/CategoriesManagement";
import WarhammerHomePage from "./pages/WarhammerHomePage";
import WarhammerAdminLogin from "./pages/admin/WarhammerAdminLogin";
import WarhammerAdminDashboard from "./pages/admin/WarhammerAdminDashboard";
import BooksManagement from "./pages/admin/BooksManagement";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Основные маршруты */}
          <Route path="/" element={<Index />} />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
          
          {/* Аудиокниги админ-роуты */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/categories" element={<CategoriesManagement />} />
          <Route path="/admin/books" element={<BooksManagement />} />
          
          {/* Warhammer маршруты */}
          <Route path="/warhammer" element={<WarhammerHomePage />} />
          
          {/* Warhammer админ-роуты */}
          <Route path="/warhammer/admin/login" element={<WarhammerAdminLogin />} />
          <Route path="/warhammer/admin/dashboard" element={<WarhammerAdminDashboard />} />
          
          {/* Catch-all маршрут */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
