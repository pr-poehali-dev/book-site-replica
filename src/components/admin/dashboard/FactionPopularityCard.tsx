
import { Card, CardContent } from "@/components/ui/card";

interface FactionData {
  name: string;
  percentage: number;
  color: string;
}

const FactionPopularityCard = () => {
  const factions: FactionData[] = [
    { name: "Империум Человечества", percentage: 42, color: "bg-warhammer-imperium" },
    { name: "Хаос", percentage: 28, color: "bg-warhammer-chaos" },
    { name: "Орки", percentage: 15, color: "bg-warhammer-orks" },
    { name: "Эльдар", percentage: 10, color: "bg-warhammer-eldar" },
    { name: "Другие", percentage: 5, color: "bg-warhammer-accent" }
  ];

  return (
    <Card className="border-warhammer-accent/20 bg-gradient-to-br from-warhammer-dark to-warhammer-secondary">
      <CardContent className="p-6">
        <h3 className="text-xl font-heading text-warhammer-accent mb-4">
          Популярные фракции
        </h3>
        <div className="space-y-4">
          {factions.map((faction, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-warhammer-light/70">{faction.name}</span>
                <span className="text-warhammer-light">{faction.percentage}%</span>
              </div>
              <div className="w-full bg-warhammer-dark/50 h-2 rounded-full">
                <div className={`${faction.color} h-2 rounded-full`} style={{ width: `${faction.percentage}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default FactionPopularityCard;
