export default function MobileNav() {
  return (
    <nav className="fixed bottom-0 left-0 w-full md:hidden flex justify-around py-4 bg-prestige-charcoal border-t border-outline">
      {["home", "analytics", "account_balance", "person"].map((icon) => (
        <span
          key={icon}
          className="material-symbols-outlined text-on-surface-variant"
        >
          {icon}
        </span>
      ))}
    </nav>
  );
}