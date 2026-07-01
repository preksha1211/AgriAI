import { CloudSun, Wind, Droplets, Thermometer } from "lucide-react";

function WeatherForecast() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-5xl font-bold">28°C</p>
          <p className="text-[#B7E4C7] mt-1">Partly Cloudy</p>
        </div>

        <CloudSun size={70} className="text-yellow-400" />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-[#0B241C] rounded-xl p-4">
          <Wind className="text-[#52B788] mb-3" size={22} />
          <p className="text-sm text-[#B7E4C7]">Wind</p>
          <h3 className="font-semibold mt-1">12 km/h</h3>
        </div>

        <div className="bg-[#0B241C] rounded-xl p-4">
          <Droplets className="text-blue-400 mb-3" size={22} />
          <p className="text-sm text-[#B7E4C7]">Humidity</p>
          <h3 className="font-semibold mt-1">68%</h3>
        </div>

        <div className="bg-[#0B241C] rounded-xl p-4">
          <Thermometer className="text-red-400 mb-3" size={22} />
          <p className="text-sm text-[#B7E4C7]">Feels Like</p>
          <h3 className="font-semibold mt-1">30°C</h3>
        </div>
      </div>
    </div>
  );
}

export default WeatherForecast;