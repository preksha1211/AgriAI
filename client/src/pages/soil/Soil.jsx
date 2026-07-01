import PageLayout from "../../components/layout/PageLayout";

function Soil() {
  return (
    <PageLayout
      title="Soil Health"
      subtitle="Analyze soil nutrients, moisture and overall soil quality."
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 h-[420px] rounded-2xl border border-[#214B3E] bg-[#163A2A]"></div>

        <div className="h-[420px] rounded-2xl border border-[#214B3E] bg-[#163A2A]"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="h-44 rounded-2xl border border-[#214B3E] bg-[#163A2A]"></div>

        <div className="h-44 rounded-2xl border border-[#214B3E] bg-[#163A2A]"></div>

        <div className="h-44 rounded-2xl border border-[#214B3E] bg-[#163A2A]"></div>
      </div>
    </PageLayout>
  );
}

export default Soil;