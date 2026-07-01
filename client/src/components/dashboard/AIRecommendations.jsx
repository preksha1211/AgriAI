import { Bot, CircleCheck, TriangleAlert } from "lucide-react";

const recommendations = [
  {
    title: "Irrigation",
    description: "Field 2 needs irrigation within the next 12 hours.",
    type: "success",
  },
  {
    title: "Rain Alert",
    description: "Heavy rainfall is expected tomorrow afternoon.",
    type: "warning",
  },
  {
    title: "Crop Health",
    description: "Tomato plants are showing excellent growth this week.",
    type: "success",
  },
];

function AIRecommendations() {
  return (
    <div className="space-y-4">
      {recommendations.map((item, index) => (
        <div
          key={index}
          className="bg-[#0B241C] border border-[#214B3E] rounded-xl p-4"
        >
          <div className="flex items-start gap-3">
            <div
              className={`mt-1 ${
                item.type === "success"
                  ? "text-[#52B788]"
                  : "text-[#F4A261]"
              }`}
            >
              {item.type === "success" ? (
                <CircleCheck size={20} />
              ) : (
                <TriangleAlert size={20} />
              )}
            </div>

            <div className="flex-1">
              <h3 className="font-semibold text-white">{item.title}</h3>

              <p className="mt-1 text-sm text-[#B7E4C7]">
                {item.description}
              </p>
            </div>

            <Bot size={18} className="text-[#52B788]" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default AIRecommendations;