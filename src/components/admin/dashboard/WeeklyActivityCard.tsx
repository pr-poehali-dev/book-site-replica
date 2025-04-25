
import { Card, CardContent } from "@/components/ui/card";
import { Clock, BarChart3, Download, TrendingUp } from "lucide-react";

interface ActivityStats {
  totalHours: number;
  averageRating: number;
  totalDownloads: number;
  newUsersWeekly: number;
}

interface WeeklyActivityCardProps {
  stats: ActivityStats;
}

const WeeklyActivityCard = ({ stats }: WeeklyActivityCardProps) => {
  const activityItems = [
    {
      icon: <Clock className="h-5 w-5 text-warhammer-imperium" />,
      bgClass: "bg-warhammer-imperium/20",
      label: "Часов прослушано",
      value: stats.totalHours
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-warhammer-tau" />,
      bgClass: "bg-warhammer-tau/20",
      label: "Средний рейтинг",
      value: stats.averageRating
    },
    {
      icon: <Download className="h-5 w-5 text-warhammer-eldar" />,
      bgClass: "bg-warhammer-eldar/20",
      label: "Загрузок",
      value: stats.totalDownloads
    },
    {
      icon: <TrendingUp className="h-5 w-5 text-warhammer-necron" />,
      bgClass: "bg-warhammer-necron/20",
      label: "Новых пользователей",
      value: stats.newUsersWeekly
    }
  ];

  return (
    <Card className="border-warhammer-accent/20 bg-gradient-to-br from-warhammer-dark to-warhammer-secondary mb-8">
      <CardContent className="p-6">
        <h3 className="text-xl font-heading text-warhammer-accent mb-4">Активность за последнюю неделю</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {activityItems.map((item, index) => (
            <div key={index} className="flex items-center">
              <div className={`${item.bgClass} p-3 rounded-full mr-4`}>
                {item.icon}
              </div>
              <div>
                <p className="text-sm text-warhammer-light/70">{item.label}</p>
                <p className="text-xl font-heading text-warhammer-light">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default WeeklyActivityCard;
