import MainLayout from "../../components/layout/MainLayout";
import DashboardHeader from "../../components/dashboard/DashboardHeader";
import WeatherForecast from "../../components/dashboard/WeatherForecast";
import AIRecommendations from "../../components/dashboard/AIRecommendations";
import RecentActivities from "../../components/dashboard/RecentActivities";
import LiveNotifications from "../../components/dashboard/LiveNotifications";
import StatCard from "../../components/cards/StatCard";
import SectionCard from "../../components/cards/SectionCard";

import {
  Sprout,
  CloudSun,
  Droplets,
  Waves,
  Tractor,
  IndianRupee,
} from "lucide-react";

function Dashboard() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <DashboardHeader />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <StatCard
            title="Crop Health"
            value="92"
            unit="%"
            icon={Sprout}
            iconBg="bg-green-600"
            change="+5.4%"
          />

          <StatCard
            title="Temperature"
            value="28"
            unit="°C"
            icon={CloudSun}
            iconBg="bg-orange-500"
            change="+1.2°C"
          />

          <StatCard
            title="Soil Moisture"
            value="68"
            unit="%"
            icon={Droplets}
            iconBg="bg-blue-600"
            change="+3%"
          />

          <StatCard
            title="Water Usage"
            value="450"
            unit="L"
            icon={Waves}
            iconBg="bg-cyan-600"
            change="-12L"
          />

          <StatCard
            title="Production"
            value="12.8"
            unit="T"
            icon={Tractor}
            iconBg="bg-lime-600"
            change="+8%"
          />

          <StatCard
            title="Revenue"
            value="2.4"
            unit="L"
            icon={IndianRupee}
            iconBg="bg-emerald-600"
            change="+15%"
          />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <SectionCard
            title="Weather Forecast"
            className="xl:col-span-2 min-h-[380px]"
          >
            <WeatherForecast />
          </SectionCard>

          <SectionCard
            title="AI Recommendations"
            className="min-h-[380px]"
          >
            <AIRecommendations />
          </SectionCard>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SectionCard
            title="Recent Activities"
            className="min-h-[320px]"
          >
            <RecentActivities />
          </SectionCard>

          <SectionCard
            title="Live Notifications"
            className="min-h-[320px]"
          >
            <LiveNotifications />
          </SectionCard>
        </div>
      </div>
    </MainLayout>
  );
}

export default Dashboard;