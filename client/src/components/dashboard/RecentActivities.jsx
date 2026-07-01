import {
  Sprout,
  Droplets,
  CloudRain,
  FlaskConical,
} from "lucide-react";

const activities = [
  {
    id: 1,
    icon: Sprout,
    title: "Tomato field updated",
    time: "10 min ago",
    color: "text-green-400",
  },
  {
    id: 2,
    icon: Droplets,
    title: "Irrigation completed",
    time: "35 min ago",
    color: "text-cyan-400",
  },
  {
    id: 3,
    icon: CloudRain,
    title: "Rain forecast received",
    time: "1 hour ago",
    color: "text-blue-400",
  },
  {
    id: 4,
    icon: FlaskConical,
    title: "Soil report generated",
    time: "Today",
    color: "text-yellow-400",
  },
];

function RecentActivities() {
  return (
    <div className="space-y-4">
      {activities.map((activity) => {
        const Icon = activity.icon;

        return (
          <div
            key={activity.id}
            className="flex items-center gap-4 bg-[#0B241C] border border-[#214B3E] rounded-xl p-4"
          >
            <div className={`p-3 rounded-lg bg-[#163A2A] ${activity.color}`}>
              <Icon size={20} />
            </div>

            <div className="flex-1">
              <h3 className="font-medium text-white">
                {activity.title}
              </h3>

              <p className="text-sm text-[#B7E4C7]">
                {activity.time}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default RecentActivities;