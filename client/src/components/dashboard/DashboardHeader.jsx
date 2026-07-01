import { CalendarDays } from "lucide-react";

function DashboardHeader() {
  const today = new Date();

  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold text-white">
          Dashboard
        </h1>

        <p className="mt-2 text-[#B7E4C7]">
          Welcome back! Here's an overview of your farm today.
        </p>
      </div>

      <div className="flex items-center gap-3 rounded-2xl border border-[#214B3E] bg-[#163A2A] px-5 py-3">
        <CalendarDays size={20} className="text-[#52B788]" />

        <span className="text-sm text-[#B7E4C7]">
          {formattedDate}
        </span>
      </div>
    </div>
  );
}

export default DashboardHeader;