
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import WarhammerLogo from "@/components/WarhammerLogo";

const WarhammerAdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Проверка учетных данных для демонстрации
    setTimeout(() => {
      if (username === "admin" && password === "password") {
        localStorage.setItem("warhammerAdminToken", "demo-token-12345");
        navigate("/admin/dashboard");
      } else {
        setError("Неверное имя пользователя или пароль");
        setLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-warhammer-dark relative">
      <div className="absolute inset-0 aquila-pattern"></div>
      <div className="w-full max-w-md p-8 space-y-8 bg-warhammer-secondary border border-warhammer-accent/20 rounded-lg shadow-lg relative z-10">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <WarhammerLogo className="h-14 w-auto" />
          </div>
          <h2 className="text-2xl font-heading font-bold text-warhammer-accent">
            ВХОД В АДМИН-ПАНЕЛЬ
          </h2>
          <p className="mt-2 text-warhammer-light/70">
            Введите учетные данные для доступа к панели управления
          </p>
        </div>

        {error && (
          <Alert variant="destructive" className="bg-warhammer-chaos/10 border-warhammer-chaos text-warhammer-chaos">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="space-y-4">
            <div>
              <Label htmlFor="username" className="text-warhammer-light">
                Имя пользователя
              </Label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="mt-1 bg-warhammer-dark text-warhammer-light border-warhammer-accent/30 focus:border-warhammer-accent"
              />
            </div>

            <div>
              <Label htmlFor="password" className="text-warhammer-light">
                Пароль
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 bg-warhammer-dark text-warhammer-light border-warhammer-accent/30 focus:border-warhammer-accent"
              />
            </div>
          </div>

          <div>
            <Button
              type="submit"
              className="w-full bg-warhammer-primary hover:bg-warhammer-primary/80 text-white"
              disabled={loading}
            >
              {loading ? "Авторизация..." : "Войти"}
            </Button>
          </div>

          <div className="text-center text-warhammer-light/50 text-sm mt-4">
            <p>Для демонстрации: admin / password</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WarhammerAdminLogin;
