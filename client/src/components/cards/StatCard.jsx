import { MoveUpRight } from "lucide-react";

function StatCard({
  title,
  value,
  unit = "",
  icon: Icon,
  iconBg = "bg-[#2D6A4F]",
  change = "",
}) {
  return (
    <div className="bg-[#163A2A] rounded-2xl p-5 border border-[#214B3E] hover:border-[#52B788] transition-all duration-300">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[#B7E4C7] text-sm">{title}</p>

          <h2 className="text-3xl font-bold mt-3">
            {value}
            <span className="text-lg ml-1">{unit}</span>
          </h2>

          {change && (
            <div className="flex items-center gap-1 mt-4 text-[#52B788] text-sm">
              <MoveUpRight size={16} />
              <span>{change}</span>
            </div>
          )}
        </div>

        <div
          className={`w-14 h-14 rounded-xl flex items-center justify-center ${iconBg}`}
        >
          {Icon && <Icon size={26} className="text-white" />}
        </div>
      </div>
    </div>
  );
}

export default StatCard;