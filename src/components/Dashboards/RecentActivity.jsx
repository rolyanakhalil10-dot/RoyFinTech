export default function RecentActivity() {
  const items = [
    ["shopping_bag", "Luxury Goods & Fine Dining", "-$142.80"],
    ["confirmation_number", "Concierge Services", "-$15.99"],
    ["account_balance", "Dividend Distribution", "+$4,250.00"],
  ];

  return (
    <div className="max-w-4xl">
      <h3 className="text-xl font-headline italic mb-6">Recent Activity</h3>
      <div className="space-y-px bg-outline rounded-xl border border-outline">
        {items.map(([icon, label, amount]) => (
          <div
            key={label}
            className="bg-prestige-charcoal p-5 flex justify-between hover:bg-white/5"
          >
            <div className="flex gap-5 items-center">
              <span className="material-symbols-outlined text-prestige-gold">
                {icon}
              </span>
              <p className="font-headline">{label}</p>
            </div>
            <p
              className={`font-headline ${
                amount.startsWith("+")
                  ? "text-prestige-emerald-light"
                  : "text-on-surface"
              }`}
            >
              {amount}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}