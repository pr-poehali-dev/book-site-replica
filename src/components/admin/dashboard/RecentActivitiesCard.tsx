
import { Card, CardContent } from "@/components/ui/card";

interface Activity {
  description: string;
  time: string;
}

const RecentActivitiesCard = () => {
  const activities: Activity[] = [
    { description: "Добавлена новая аудиокнига "Темная Империя"", time: "2 часа назад" },
    { description: "Обновлен раздел "Ересь Хоруса"", time: "Вчера, 18:43" },
    { description: "Добавлено 3 новых книги в раздел "Орки"", time: "Вчера, 15:21" },
    { description: "Создана новая категория "Инквизиция"", time: "20.05.2023, 11:54" },
    { description: "Выгружена статистика прослушиваний", time: "19.05.2023, 09:15" }
  ];

  return (
    <Card className="border-warhammer-accent/20 bg-gradient-to-br from-warhammer-dark to-warhammer-secondary">
      <CardContent className="p-6">
        <h3 className="text-xl font-heading text-warhammer-accent mb-4">
          Последние действия
        </h3>
        <ul className="space-y-3">
          {activities.map((activity, index) => (
            <li 
              key={index} 
              className={`pb-3 ${index < activities.length - 1 ? 'border-b border-warhammer-accent/10' : ''}`}
            >
              <p className="text-warhammer-light">{activity.description}</p>
              <p className="text-sm text-warhammer-light/50">{activity.time}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default RecentActivitiesCard;
