import { useState } from "react";
import {
  ArrowUpRight,
  ArrowDownRight,
  CreditCard,
  ShoppingBag,
  Utensils,
  Car,
  Wifi,
  TrendingUp,
  Plus,
  Bell,
  Search,
  LayoutDashboard,
  Receipt,
  PieChart,
  Settings,
  LogOut,
  ChevronRight,
  DollarSign,
  Zap,
  type LucideIcon,
} from "lucide-react";

type Transaction = {
  id: number;
  name: string;
  category: string;
  amount: number;
  date: string;
  icon: LucideIcon;
  color: string;
};

type Category = {
  name: string;
  spent: number;
  budget: number;
  color: string;
  pct: number;
};

const transactions : Transaction[] = [
  { id: 1, name: "Netflix Subscription", category: "Entertainment", amount: -14.99, date: "Apr 22", icon: Wifi, color: "from-red-500 to-pink-500" },
  { id: 2, name: "Grocery Store", category: "Food & Dining", amount: -87.40, date: "Apr 21", icon: ShoppingBag, color: "from-green-500 to-emerald-500" },
  { id: 3, name: "Salary Deposit", category: "Income", amount: 4500.00, date: "Apr 20", icon: DollarSign, color: "from-blue-500 to-cyan-500" },
  { id: 4, name: "Uber Ride", category: "Transport", amount: -22.50, date: "Apr 20", icon: Car, color: "from-yellow-500 to-orange-500" },
  { id: 5, name: "Restaurant Dinner", category: "Food & Dining", amount: -56.80, date: "Apr 19", icon: Utensils, color: "from-purple-500 to-violet-500" },
  { id: 6, name: "Freelance Payment", category: "Income", amount: 800.00, date: "Apr 18", icon: Zap, color: "from-blue-400 to-cyan-400" },
];

const categories : Category[] = [
  { name: "Food & Dining", spent: 412, budget: 600, color: "from-purple-500 to-violet-500", pct: 69 },
  { name: "Transport", spent: 180, budget: 250, color: "from-yellow-500 to-orange-500", pct: 72 },
  { name: "Entertainment", spent: 89, budget: 150, color: "from-red-500 to-pink-500", pct: 59 },
  { name: "Shopping", spent: 310, budget: 400, color: "from-green-500 to-emerald-500", pct: 78 },
];

const months = ["Jan","Feb","Mar","Apr","May","Jun"];
const barData = [38, 52, 45, 68, 41, 74];

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Receipt, label: "Transactions", active: false },
  { icon: PieChart, label: "Analytics", active: false },
  { icon: CreditCard, label: "Cards", active: false },
  { icon: Settings, label: "Settings", active: false },
];

export default function ExpenseDashboard() {
  const [activeNav, setActiveNav] = useState<String>("Dashboard");

  return (
    <div
      className="min-h-screen flex"
      style={{
        background: "linear-gradient(135deg, #0a0f1e 0%, #0d1526 50%, #0a1020 100%)",
        fontFamily: "'DM Sans', 'Outfit', sans-serif",
      }}
    >
      {/* Ambient glow background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute rounded-full opacity-10"
          style={{
            width: 600,
            height: 600,
            top: "-10%",
            left: "15%",
            background: "radial-gradient(circle, rgba(59,130,246,0.6) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute rounded-full opacity-8"
          style={{
            width: 400,
            height: 400,
            bottom: "10%",
            right: "5%",
            background: "radial-gradient(circle, rgba(34,211,238,0.5) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      {/* Sidebar */}
      <aside
        className="w-20 lg:w-64 flex-shrink-0 flex flex-col py-6 px-3 lg:px-5 relative z-10"
        style={{
          background: "rgba(255,255,255,0.03)",
          borderRight: "1px solid rgba(255,255,255,0.07)",
          backdropFilter: "blur(20px)",
        }}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 mb-10 px-2">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #3b82f6, #22d3ee)" }}
          >
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <span
            className="hidden lg:block text-lg font-bold"
            style={{ background: "linear-gradient(90deg, #fff, #93c5fd)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
          >
            RoyFinTech
          </span>
        </div>

        {/* Nav */}
        <nav className="flex flex-col gap-1 flex-1">
          {navItems.map((navItem) => {
            const Icon = navItem.icon;
            const label = navItem.label;
            const isActive = activeNav === label;
            return (
              <button
                key={label}
                onClick={() => setActiveNav(label)}
                className="flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 group"
                style={{
                  background: isActive ? "linear-gradient(90deg, rgba(59,130,246,0.2), rgba(34,211,238,0.08))" : "transparent",
                  border: isActive ? "1px solid rgba(59,130,246,0.3)" : "1px solid transparent",
                }}
              >
                <Icon
                  className="w-5 h-5 flex-shrink-0 transition-colors"
                  style={{ color: isActive ? "#60a5fa" : "rgba(255,255,255,0.4)" }}
                />
                <span
                  className="hidden lg:block text-sm font-medium transition-colors"
                  style={{ color: isActive ? "#e0f2fe" : "rgba(255,255,255,0.4)" }}
                >
                  {label}
                </span>
              </button>
            );
          })}
        </nav>

        {/* User */}
        <div
          className="flex items-center gap-3 px-3 py-3 rounded-xl mt-4"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
        >
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #3b82f6, #22d3ee)", color: "#fff" }}
          >
            R
          </div>
          <div className="hidden lg:block">
            <p className="text-xs font-semibold text-white">Roy Al-Nasser</p>
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>Pro Plan</p>
          </div>
          <LogOut className="hidden lg:block w-4 h-4 ml-auto" style={{ color: "rgba(255,255,255,0.3)" }} />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto relative z-10">
        {/* Header */}
        <header
          className="sticky top-0 flex items-center justify-between px-6 lg:px-8 py-4"
          style={{
            background: "rgba(10,15,30,0.8)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div>
            <h1 className="text-xl font-bold text-white">Good morning, Roy 👋</h1>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>Wednesday, April 22, 2026</p>
          </div>
          <div className="flex items-center gap-3">
            <div
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl text-sm"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.4)" }}
            >
              <Search className="w-4 h-4" />
              <span>Search...</span>
            </div>
            <button
              className="relative w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <Bell className="w-5 h-5" style={{ color: "rgba(255,255,255,0.6)" }} />
              <span
                className="absolute top-2 right-2 w-2 h-2 rounded-full"
                style={{ background: "linear-gradient(135deg, #3b82f6, #22d3ee)" }}
              />
            </button>
            <button
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #3b82f6, #22d3ee)" }}
            >
              <Plus className="w-4 h-4" />
              <span className="hidden sm:inline">Add Expense</span>
            </button>
          </div>
        </header>

        <div className="px-6 lg:px-8 py-6 space-y-6">
          {/* Stat Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Total Balance", value: "$12,840", change: "+8.2%", up: true, sub: "vs last month" },
              { label: "Monthly Spent", value: "$3,248", change: "-4.1%", up: false, sub: "vs last month" },
              { label: "Total Income", value: "$5,300", change: "+12%", up: true, sub: "this month" },
              { label: "Savings Rate", value: "38.7%", change: "+2.3%", up: true, sub: "on track" },
            ].map((card) => (
              <div
                key={card.label}
                className="p-4 lg:p-5 rounded-2xl relative overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <p className="text-xs font-medium mb-2" style={{ color: "rgba(255,255,255,0.45)" }}>{card.label}</p>
                <p className="text-xl lg:text-2xl font-bold text-white mb-2">{card.value}</p>
                <div className="flex items-center gap-1">
                  {card.up
                    ? <ArrowUpRight className="w-3.5 h-3.5" style={{ color: "#34d399" }} />
                    : <ArrowDownRight className="w-3.5 h-3.5" style={{ color: "#f87171" }} />
                  }
                  <span className="text-xs font-semibold" style={{ color: card.up ? "#34d399" : "#f87171" }}>{card.change}</span>
                  <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>{card.sub}</span>
                </div>
                {/* subtle corner glow */}
                <div
                  className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full opacity-20"
                  style={{ background: card.up ? "radial-gradient(circle, #3b82f6, transparent)" : "radial-gradient(circle, #f87171, transparent)" }}
                />
              </div>
            ))}
          </div>

          {/* Chart + Transactions Row */}
          <div className="grid lg:grid-cols-5 gap-4">
            {/* Bar Chart */}
            <div
              className="lg:col-span-3 p-5 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(10px)",
              }}
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-base font-semibold text-white">Spending Overview</h2>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>Jan – Jun 2026</p>
                </div>
                <div
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium"
                  style={{ background: "rgba(59,130,246,0.12)", color: "#60a5fa", border: "1px solid rgba(59,130,246,0.2)" }}
                >
                  <TrendingUp className="w-3.5 h-3.5" />
                  This Year
                </div>
              </div>

              {/* Bars */}
              <div className="flex items-end justify-between gap-2 h-40">
                {months.map((m, i) => (
                  <div key={m} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full flex items-end justify-center" style={{ height: "120px" }}>
                      <div
                        className="w-full rounded-t-lg transition-all duration-500"
                        style={{
                          height: `${barData[i]}%`,
                          background: i === 3
                            ? "linear-gradient(180deg, #60a5fa, #22d3ee)"
                            : "rgba(255,255,255,0.08)",
                          boxShadow: i === 3 ? "0 0 20px rgba(96,165,250,0.3)" : "none",
                        }}
                      />
                    </div>
                    <span className="text-xs" style={{ color: i === 3 ? "#93c5fd" : "rgba(255,255,255,0.3)" }}>{m}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Transactions */}
            <div
              className="lg:col-span-2 p-5 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(10px)",
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-base font-semibold text-white">Recent</h2>
                <button className="flex items-center gap-1 text-xs font-medium" style={{ color: "#60a5fa" }}>
                  See all <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="space-y-3">
                {transactions.slice(0, 5).map((tx) => {
                  const Icon = tx.icon;
                  return (
                    <div key={tx.id} className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${tx.color}`}
                      >
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-white truncate">{tx.name}</p>
                        <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>{tx.date}</p>
                      </div>
                      <span
                        className="text-sm font-semibold flex-shrink-0"
                        style={{ color: tx.amount > 0 ? "#34d399" : "#f1f5f9" }}
                      >
                        {tx.amount > 0 ? "+" : ""}${Math.abs(tx.amount).toFixed(2)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Budget Categories + Card */}
          <div className="grid lg:grid-cols-5 gap-4">
            {/* Budget */}
            <div
              className="lg:col-span-3 p-5 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(10px)",
              }}
            >
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-base font-semibold text-white">Budget Tracker</h2>
                <span className="text-xs px-2.5 py-1 rounded-lg" style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.4)" }}>April 2026</span>
              </div>
              <div className="space-y-4">
                {categories.map((cat) => (
                  <div key={cat.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-medium text-white">{cat.name}</span>
                      <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                        ${cat.spent} <span style={{ color: "rgba(255,255,255,0.25)" }}>/ ${cat.budget}</span>
                      </span>
                    </div>
                    <div className="w-full h-2 rounded-full" style={{ background: "rgba(255,255,255,0.06)" }}>
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${cat.color} transition-all duration-700`}
                        style={{ width: `${cat.pct}%` }}
                      />
                    </div>
                    <div className="flex justify-between mt-1">
                      <span className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>{cat.pct}% used</span>
                      <span className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>${cat.budget - cat.spent} left</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Virtual Card */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              <div
                className="flex-1 p-5 rounded-2xl relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #1e3a5f 0%, #0f2547 40%, #0a1a38 100%)",
                  border: "1px solid rgba(59,130,246,0.25)",
                }}
              >
                {/* card shimmer */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    background: "radial-gradient(ellipse at top left, rgba(96,165,250,0.5), transparent 60%)",
                  }}
                />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.5)" }}>Virtual Card</span>
                    <div className="flex gap-1">
                      <div className="w-7 h-7 rounded-full opacity-80" style={{ background: "#ef4444" }} />
                      <div className="w-7 h-7 rounded-full opacity-80 -ml-3" style={{ background: "#f97316" }} />
                    </div>
                  </div>
                  <p className="text-base font-mono tracking-widest text-white mb-6 opacity-80">
                    •••• •••• •••• 4821
                  </p>
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-xs mb-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>Card Holder</p>
                      <p className="text-sm font-semibold text-white">Roy Al-Nasser</p>
                    </div>
                    <div>
                      <p className="text-xs mb-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>Expires</p>
                      <p className="text-sm font-semibold text-white">08/29</p>
                    </div>
                    <div>
                      <p className="text-xs mb-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>Balance</p>
                      <p className="text-sm font-semibold" style={{ color: "#60a5fa" }}>$8,420</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div
                className="p-4 rounded-2xl flex items-center justify-between"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div className="text-center">
                  <p className="text-xs mb-1" style={{ color: "rgba(255,255,255,0.35)" }}>Transactions</p>
                  <p className="text-lg font-bold text-white">142</p>
                </div>
                <div className="w-px h-8" style={{ background: "rgba(255,255,255,0.08)" }} />
                <div className="text-center">
                  <p className="text-xs mb-1" style={{ color: "rgba(255,255,255,0.35)" }}>Avg/Day</p>
                  <p className="text-lg font-bold text-white">$104</p>
                </div>
                <div className="w-px h-8" style={{ background: "rgba(255,255,255,0.08)" }} />
                <div className="text-center">
                  <p className="text-xs mb-1" style={{ color: "rgba(255,255,255,0.35)" }}>Goal</p>
                  <p className="text-lg font-bold" style={{ color: "#34d399" }}>82%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
