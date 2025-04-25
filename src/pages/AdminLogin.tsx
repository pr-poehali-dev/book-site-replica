
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Lock, LogIn } from "lucide-react";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // В реальном проекте здесь будет API-запрос
    // Это простая демонстрационная проверка
    if (username === "admin" && password === "password") {
      // В реальном проекте сохраняем токен в localStorage
      localStorage.setItem("adminToken", "demo-token");
      navigate("/admin/dashboard");
    } else {
      setError("Неверное имя пользователя или пароль");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Вход в админ-панель</CardTitle>
          <CardDescription className="text-center">
            Введите свои учетные данные для доступа к админ-панели
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleLogin}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Имя пользователя</Label>
              <Input
                id="username"
                placeholder="admin"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Пароль</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="text-sm text-red-500">{error}</p>}
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">
              <LogIn className="mr-2 h-4 w-4" />
              Войти
            </Button>
          </CardFooter>
        </form>
        <div className="p-4 pt-0 text-center text-sm text-muted-foreground">
          <div className="flex items-center justify-center">
            <Lock className="mr-2 h-4 w-4" />
            <span>Демо-данные: admin / password</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AdminLogin;
