import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Real-Time Expense Tracking",
    description:
      "Track every transaction instantly and stay in control of your finances without lifting a finger.",
    icon: ArrowPathIcon,
  },
  {
    name: "AI-Powered Budgeting",
    description:
      "Let AI analyze your habits and create smarter budgets that actually work for your lifestyle.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Actionable Financial Insights",
    description:
      "Turn your financial data into clear insights that help you spend better and save faster.",
    icon: FingerPrintIcon,
  },
  {
    name: "Bank-Level Security",
    description:
      "We use advanced encryption to keep your data safe, private, and fully under your control.",
    icon: LockClosedIcon,
  },
];

export default function Features() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32" id="features">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl lg:text-balance">
            Everything you need to manage your finances
          </p>
          <p className="mt-6 text-lg/8 text-gray-300">
            services that provide a seamless experience for managing your
            finances, from budgeting and expense tracking to investment
            management and financial planning. Our platform is designed to help
            you take control of your financial future with ease and confidence.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-white">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-gradient-to-b from-blue-400 via-cyan-400 to-blue-400">
                    <feature.icon
                      aria-hidden="true"
                      className="size-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-400">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
