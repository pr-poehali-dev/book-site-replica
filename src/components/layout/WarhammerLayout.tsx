
import { ReactNode } from "react";
import WarhammerHeader from "../WarhammerHeader";
import WarhammerFooter from "./WarhammerFooter";

interface WarhammerLayoutProps {
  children: ReactNode;
}

const WarhammerLayout = ({ children }: WarhammerLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-warhammer-secondary relative">
      <div className="absolute inset-0 chaos-pattern"></div>
      <WarhammerHeader />
      <main className="flex-1 relative z-10">
        {children}
      </main>
      <WarhammerFooter />
    </div>
  );
};

export default WarhammerLayout;
