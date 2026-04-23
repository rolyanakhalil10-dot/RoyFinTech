
export default function StatCard({ title, value, icon }) {
  return (
    <div className="bg-prestige-charcoal border border-outline rounded-xl p-6 hover:border-prestige-gold/30 transition-all">
      <div className="flex justify-between mb-6">
        <span className="material-symbols-outlined text-prestige-emerald-light">
          {icon}
        </span>
        <span className="material-symbols-outlined text-on-surface-variant">
          more_vert
        </span>
      </div>
      <p className="text-[10px] uppercase tracking-widest text-on-surface-variant">
        {title}
      </p>
      <h4 className="text-2xl font-headline">{value}</h4>
    </div>
  );
}
