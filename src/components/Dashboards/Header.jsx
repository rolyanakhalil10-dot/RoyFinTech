
export default function Header() {
  return (
    <header className="hidden md:flex justify-between items-center px-10 py-8 border-b border-outline bg-prestige-charcoal">
      <h2 className="text-3xl font-headline italic">Overview</h2>
      <div className="flex items-center gap-6">
        <span className="material-symbols-outlined text-on-surface-variant">
          notifications
        </span>
        <img
          alt="avatar"
          className="w-10 h-10 rounded-full border border-prestige-gold/20"
          src="https://i.pravatar.cc/100"
        />
      </div>
    </header>
  );
}
