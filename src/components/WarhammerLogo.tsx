
interface WarhammerLogoProps {
  className?: string;
}

const WarhammerLogo = ({ className = "h-8 w-auto" }: WarhammerLogoProps) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="text-warhammer-primary font-heading font-bold text-xl tracking-wider flex items-center">
        <span className="text-warhammer-accent">W</span>
        <span>ARHAMMER</span>
      </div>
      <div className="text-xs text-warhammer-accent tracking-widest font-heading mt-[-3px]">
        AUDIO LIBRARY
      </div>
    </div>
  );
};

export default WarhammerLogo;
