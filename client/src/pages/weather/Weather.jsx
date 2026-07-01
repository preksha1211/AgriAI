import PageLayout from "../../components/layout/PageLayout";

function Weather() {
  return (
    <PageLayout
      title="Weather"
      subtitle="Monitor current weather conditions and upcoming forecasts."
    >
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 h-[420px] rounded-2xl bg-[#163A2A] border border-[#214B3E]"></div>

        <div className="h-[420px] rounded-2xl bg-[#163A2A] border border-[#214B3E]"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="h-44 rounded-2xl bg-[#163A2A] border border-[#214B3E]"></div>

        <div className="h-44 rounded-2xl bg-[#163A2A] border border-[#214B3E]"></div>

        <div className="h-44 rounded-2xl bg-[#163A2A] border border-[#214B3E]"></div>
      </div>
    </PageLayout>
  );
}

export default Weather;