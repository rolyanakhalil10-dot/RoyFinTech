import StatCard from "./StatCard";
export default function Cards() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
      <div className="metallic-grain rounded-xl p-8 border border-white/5 shadow-2xl min-h-[220px] flex flex-col justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-prestige-gold-bright/60">
            Total Assets
          </p>
          <p className="text-4xl embossed-text font-accent">$124,500.00</p>
        </div>
        <div className="text-right">
          <span className="text-[10px] text-prestige-emerald-light bg-emerald-400/10 px-2 py-0.5 font-bold tracking-wider">
            +2.4%
          </span>
        </div>
      </div>

      <StatCard title="Monthly Inflow" value="$8,240.50" icon="north_east" />
      <StatCard
        title="Monthly Outflow"
        value="$3,120.00"
        icon="south_west"
      />
    </div>
  );
}

