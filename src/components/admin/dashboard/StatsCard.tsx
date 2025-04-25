
import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface StatsCardProps {
  icon: ReactNode;
  iconBgClass: string;
  iconClass: string;
  label: string;
  value: string | number;
}

const StatsCard = ({ icon, iconBgClass, iconClass, label, value }: StatsCardProps) => {
  return (
    <Card className="border-warhammer-accent/20 bg-gradient-to-br from-warhammer-dark to-warhammer-secondary">
      <CardContent className="p-6 flex items-center">
        <div className={`${iconBgClass} p-3 rounded-full mr-4`}>
          {React.cloneElement(icon as React.ReactElement, { className: `h-6 w-6 ${iconClass}` })}
        </div>
        <div>
          <p className="text-sm text-warhammer-light/70">{label}</p>
          <p className="text-2xl font-heading text-warhammer-light">{value}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
