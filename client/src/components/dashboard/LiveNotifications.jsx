import {
  CloudRain,
  Bug,
  Droplets,
  Wheat,
  TriangleAlert,
} from "lucide-react";

const notifications = [
  {
    id: 1,
    title: "Heavy Rain Alert",
    message: "Heavy rainfall expected in the next 3 hours.",
    icon: CloudRain,
    color: "text-blue-400",
  },
  {
    id: 2,
    title: "Pest Alert",
    message: "Possible fungal infection detected in tomato field.",
    icon: Bug,
    color: "text-orange-400",
  },
  {
    id: 3,
    title: "Irrigation Reminder",
    message: "Field 2 soil moisture is below the recommended level.",
    icon: Droplets,
    color: "text-cyan-400",
  },
  {
    id: 4,
    title: "Harvest Reminder",
    message: "Wheat crop will be ready for harvest in 2 days.",
    icon: Wheat,
    color: "text-green-400",
  },
];

function LiveNotifications() {
  return (
    <div className="space-y-4">
      {notifications.map((notification) => {
        const Icon = notification.icon;

        return (
          <div
            key={notification.id}
            className="flex items-start gap-4 rounded-xl border border-[#214B3E] bg-[#0B241C] p-4"
          >
            <div className={`mt-1 ${notification.color}`}>
              <Icon size={20} />
            </div>

            <div className="flex-1">
              <h3 className="font-semibold text-white">
                {notification.title}
              </h3>

              <p className="mt-1 text-sm text-[#B7E4C7]">
                {notification.message}
              </p>
            </div>

            <TriangleAlert
              size={18}
              className="text-[#F4A261]"
            />
          </div>
        );
      })}
    </div>
  );
}

export default LiveNotifications;