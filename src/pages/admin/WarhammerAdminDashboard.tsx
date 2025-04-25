
import { useState } from "react";
import WarhammerAdminLayout from "@/components/admin/WarhammerAdminLayout";
import StatsCard from "@/components/admin/dashboard/StatsCard";
import WeeklyActivityCard from "@/components/admin/dashboard/WeeklyActivityCard";
import FactionPopularityCard from "@/components/admin/dashboard/FactionPopularityCard";
import RecentActivitiesCard from "@/components/admin/dashboard/RecentActivitiesCard";
import { BookOpen, Users, Headphones } from "lucide-react";

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

  const mainStats = [
    {
      icon: <BookOpen />,
      iconBgClass: "bg-warhammer-primary/20",
      iconClass: "text-warhammer-primary",
      label: "Всего аудиокниг",
      value: stats.totalBooks
    },
    {
      icon: <Users />,
      iconBgClass: "bg-warhammer-accent/20",
      iconClass: "text-warhammer-accent",
      label: "Пользователей",
      value: stats.totalUsers
    },
    {
      icon: <Headphones />,
      iconBgClass: "bg-warhammer-chaos/20",
      iconClass: "text-warhammer-chaos",
      label: "Прослушиваний",
      value: stats.totalListens
    }
  ];

  return (
    <WarhammerAdminLayout title="Панель управления">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {mainStats.map((stat, index) => (
          <StatsCard
            key={index}
            icon={stat.icon}
            iconBgClass={stat.iconBgClass}
            iconClass={stat.iconClass}
            label={stat.label}
            value={stat.value}
          />
        ))}
      </div>
      
      <WeeklyActivityCard stats={stats} />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <FactionPopularityCard />
        <RecentActivitiesCard />
      </div>
    </WarhammerAdminLayout>
  );
};

export default WarhammerAdminDashboard;
