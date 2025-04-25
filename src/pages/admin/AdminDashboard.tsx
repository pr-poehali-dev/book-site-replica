
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import AdminLayout from "@/components/admin/AdminLayout";
import { ArrowUpRight, BookOpen, Users, Play, Download } from "lucide-react";

const statCards = [
  {
    title: "Всего аудиокниг",
    value: "245",
    change: "+12% с прошлого месяца",
    icon: <BookOpen className="h-6 w-6 text-blue-500" />,
  },
  {
    title: "Пользователей",
    value: "1,274",
    change: "+18% с прошлого месяца",
    icon: <Users className="h-6 w-6 text-green-500" />,
  },
  {
    title: "Прослушиваний",
    value: "8,942",
    change: "+7% с прошлого месяца",
    icon: <Play className="h-6 w-6 text-purple-500" />,
  },
  {
    title: "Загрузок",
    value: "3,587",
    change: "+24% с прошлого месяца",
    icon: <Download className="h-6 w-6 text-amber-500" />,
  },
];

const recentBooks = [
  { 
    title: "Тревожные люди", 
    author: "Фредрик Бакман", 
    added: "2 часа назад",
    status: "Опубликовано" 
  },
  { 
    title: "Задача трех тел", 
    author: "Лю Цысинь", 
    added: "5 часов назад",
    status: "Опубликовано" 
  },
  { 
    title: "Паразиты сознания", 
    author: "Сергей Тармашев", 
    added: "1 день назад",
    status: "Опубликовано" 
  },
  { 
    title: "Преступление и наказание", 
    author: "Федор Достоевский", 
    added: "2 дня назад",
    status: "Черновик" 
  },
  { 
    title: "Война и мир (Том 1)", 
    author: "Лев Толстой", 
    added: "3 дня назад",
    status: "В обработке" 
  },
];

const AdminDashboard = () => {
  return (
    <AdminLayout title="Панель управления">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {statCards.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              {stat.icon}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground flex items-center mt-1">
                <ArrowUpRight className="mr-1 h-3 w-3 text-green-500" />
                {stat.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 mt-4">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Недавно добавленные книги</CardTitle>
            <CardDescription>
              Последние 5 аудиокниг, добавленных на платформу
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentBooks.map((book, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between border-b border-gray-100 last:border-0 pb-3 last:pb-0"
                >
                  <div>
                    <p className="font-medium">{book.title}</p>
                    <p className="text-sm text-gray-500">{book.author}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">{book.added}</p>
                    <p className={`text-xs ${
                      book.status === "Опубликовано" 
                        ? "text-green-500" 
                        : book.status === "Черновик" 
                          ? "text-amber-500" 
                          : "text-blue-500"
                    }`}>
                      {book.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Быстрые действия</CardTitle>
            <CardDescription>
              Часто используемые функции администратора
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="grid grid-cols-2 gap-2">
              <Card className="p-4 hover:bg-gray-50 cursor-pointer transition-colors">
                <div className="flex flex-col items-center text-center">
                  <BookOpen className="h-8 w-8 text-primary mb-2" />
                  <h3 className="font-medium">Добавить книгу</h3>
                </div>
              </Card>
              
              <Card className="p-4 hover:bg-gray-50 cursor-pointer transition-colors">
                <div className="flex flex-col items-center text-center">
                  <Users className="h-8 w-8 text-primary mb-2" />
                  <h3 className="font-medium">Управление пользователями</h3>
                </div>
              </Card>
              
              <Card className="p-4 hover:bg-gray-50 cursor-pointer transition-colors">
                <div className="flex flex-col items-center text-center">
                  <Play className="h-8 w-8 text-primary mb-2" />
                  <h3 className="font-medium">Статистика прослушиваний</h3>
                </div>
              </Card>
              
              <Card className="p-4 hover:bg-gray-50 cursor-pointer transition-colors">
                <div className="flex flex-col items-center text-center">
                  <Download className="h-8 w-8 text-primary mb-2" />
                  <h3 className="font-medium">Отчеты по загрузкам</h3>
                </div>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
