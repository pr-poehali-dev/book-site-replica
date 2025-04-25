
import { useState } from "react";
import WarhammerAdminLayout from "@/components/admin/WarhammerAdminLayout";
import { Card, CardContent } from "@/components/ui/card";
import { 
  BookOpen, 
  Users, 
  BarChart3, 
  Headphones, 
  Clock,
  Download,
  TrendingUp
} from "lucide-react";

const WarhammerAdminDashboard = () => {
  const [stats] = useState({
    totalBooks: 187,
    totalUsers: 3542,
    totalListens: 28943,
    totalHours: 42561,
    averageRating: 4.7,
    totalDownloads: 15732,
    newUsersWeekly: 342,
  });

  return (
    <WarhammerAdminLayout title="Панель управления">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="border-warhammer-accent/20 bg-gradient-to-br from-warhammer-dark to-warhammer-secondary">
          <CardContent className="p-6 flex items-center">
            <div className="bg-warhammer-primary/20 p-3 rounded-full mr-4">
              <BookOpen className="h-6 w-6 text-warhammer-primary" />
            </div>
            <div>
              <p className="text-sm text-warhammer-light/70">Всего аудиокниг</p>
              <p className="text-2xl font-heading text-warhammer-light">{stats.totalBooks}</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-warhammer-accent/20 bg-gradient-to-br from-warhammer-dark to-warhammer-secondary">
          <CardContent className="p-6 flex items-center">
            <div className="bg-warhammer-accent/20 p-3 rounded-full mr-4">
              <Users className="h-6 w-6 text-warhammer-accent" />
            </div>
            <div>
              <p className="text-sm text-warhammer-light/70">Пользователей</p>
              <p className="text-2xl font-heading text-warhammer-light">{stats.totalUsers}</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-warhammer-accent/20 bg-gradient-to-br from-warhammer-dark to-warhammer-secondary">
          <CardContent className="p-6 flex items-center">
            <div className="bg-warhammer-chaos/20 p-3 rounded-full mr-4">
              <Headphones className="h-6 w-6 text-warhammer-chaos" />
            </div>
            <div>
              <p className="text-sm text-warhammer-light/70">Прослушиваний</p>
              <p className="text-2xl font-heading text-warhammer-light">{stats.totalListens}</p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card className="border-warhammer-accent/20 bg-gradient-to-br from-warhammer-dark to-warhammer-secondary mb-8">
        <CardContent className="p-6">
          <h3 className="text-xl font-heading text-warhammer-accent mb-4">Активность за последнюю неделю</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex items-center">
              <div className="bg-warhammer-imperium/20 p-3 rounded-full mr-4">
                <Clock className="h-5 w-5 text-warhammer-imperium" />
              </div>
              <div>
                <p className="text-sm text-warhammer-light/70">Часов прослушано</p>
                <p className="text-xl font-heading text-warhammer-light">{stats.totalHours}</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="bg-warhammer-tau/20 p-3 rounded-full mr-4">
                <BarChart3 className="h-5 w-5 text-warhammer-tau" />
              </div>
              <div>
                <p className="text-sm text-warhammer-light/70">Средний рейтинг</p>
                <p className="text-xl font-heading text-warhammer-light">{stats.averageRating}</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="bg-warhammer-eldar/20 p-3 rounded-full mr-4">
                <Download className="h-5 w-5 text-warhammer-eldar" />
              </div>
              <div>
                <p className="text-sm text-warhammer-light/70">Загрузок</p>
                <p className="text-xl font-heading text-warhammer-light">{stats.totalDownloads}</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="bg-warhammer-necron/20 p-3 rounded-full mr-4">
                <TrendingUp className="h-5 w-5 text-warhammer-necron" />
              </div>
              <div>
                <p className="text-sm text-warhammer-light/70">Новых пользователей</p>
                <p className="text-xl font-heading text-warhammer-light">{stats.newUsersWeekly}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-warhammer-accent/20 bg-gradient-to-br from-warhammer-dark to-warhammer-secondary">
          <CardContent className="p-6">
            <h3 className="text-xl font-heading text-warhammer-accent mb-4">
              Популярные фракции
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-warhammer-light/70">Империум Человечества</span>
                  <span className="text-warhammer-light">42%</span>
                </div>
                <div className="w-full bg-warhammer-dark/50 h-2 rounded-full">
                  <div className="bg-warhammer-imperium h-2 rounded-full" style={{ width: "42%" }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-warhammer-light/70">Хаос</span>
                  <span className="text-warhammer-light">28%</span>
                </div>
                <div className="w-full bg-warhammer-dark/50 h-2 rounded-full">
                  <div className="bg-warhammer-chaos h-2 rounded-full" style={{ width: "28%" }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-warhammer-light/70">Орки</span>
                  <span className="text-warhammer-light">15%</span>
                </div>
                <div className="w-full bg-warhammer-dark/50 h-2 rounded-full">
                  <div className="bg-warhammer-orks h-2 rounded-full" style={{ width: "15%" }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-warhammer-light/70">Эльдар</span>
                  <span className="text-warhammer-light">10%</span>
                </div>
                <div className="w-full bg-warhammer-dark/50 h-2 rounded-full">
                  <div className="bg-warhammer-eldar h-2 rounded-full" style={{ width: "10%" }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-warhammer-light/70">Другие</span>
                  <span className="text-warhammer-light">5%</span>
                </div>
                <div className="w-full bg-warhammer-dark/50 h-2 rounded-full">
                  <div className="bg-warhammer-accent h-2 rounded-full" style={{ width: "5%" }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-warhammer-accent/20 bg-gradient-to-br from-warhammer-dark to-warhammer-secondary">
          <CardContent className="p-6">
            <h3 className="text-xl font-heading text-warhammer-accent mb-4">
              Последние действия
            </h3>
            <ul className="space-y-3">
              <li className="pb-3 border-b border-warhammer-accent/10">
                <p className="text-warhammer-light">Добавлена новая аудиокнига "Темная Империя"</p>
                <p className="text-sm text-warhammer-light/50">2 часа назад</p>
              </li>
              <li className="pb-3 border-b border-warhammer-accent/10">
                <p className="text-warhammer-light">Обновлен раздел "Ересь Хоруса"</p>
                <p className="text-sm text-warhammer-light/50">Вчера, 18:43</p>
              </li>
              <li className="pb-3 border-b border-warhammer-accent/10">
                <p className="text-warhammer-light">Добавлено 3 новых книги в раздел "Орки"</p>
                <p className="text-sm text-warhammer-light/50">Вчера, 15:21</p>
              </li>
              <li className="pb-3 border-b border-warhammer-accent/10">
                <p className="text-warhammer-light">Создана новая категория "Инквизиция"</p>
                <p className="text-sm text-warhammer-light/50">20.05.2023, 11:54</p>
              </li>
              <li>
                <p className="text-warhammer-light">Выгружена статистика прослушиваний</p>
                <p className="text-sm text-warhammer-light/50">19.05.2023, 09:15</p>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </WarhammerAdminLayout>
  );
};

export default WarhammerAdminDashboard;
