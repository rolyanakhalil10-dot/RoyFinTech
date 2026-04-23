import React from 'react'

function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col h-screen sticky top-0 w-64 border-r border-outline bg-prestige-charcoal">
      <div className="p-8 pb-10">
        <h1 className="text-xl font-bold tracking-widest text-prestige-gold font-accent uppercase">
          Atelier
        </h1>
        <p className="text-[10px] text-prestige-gold-dim mt-1 uppercase tracking-[0.2em] font-medium">
          Private Wealth Management
        </p>
      </div>

      <nav className="flex-1 mt-2">
        {[
          ["account_balance_wallet", "Portfolio", true],
          ["receipt_long", "Transactions"],
          ["query_stats", "Insights"],
          ["settings", "Settings"],
        ].map(([icon, label, active]) => (
          <a
            key={label}
            className={`flex items-center gap-4 px-8 py-4 transition-all duration-300 ${
              active
                ? "border-r-2 border-prestige-gold text-prestige-gold bg-white/5"
                : "text-on-surface-variant hover:text-prestige-gold hover:bg-white/5"
            }`}
            href="#"
          >
            <span className={`material-symbols-outlined ${active && "fill"}`}>
              {icon}
            </span>
            <span className="text-sm tracking-wide">{label}</span>
          </a>
        ))}
      </nav>

      <div className="p-6 border-t border-outline">
        <button className="w-full py-4 bg-prestige-emerald hover:bg-prestige-emerald-light text-white text-xs font-accent uppercase tracking-widest">
          Add Transaction
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
