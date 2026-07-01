import PageLayout from "../../components/layout/PageLayout";

function Fields() {
  return (
    <PageLayout
      title="Fields"
      subtitle="Manage and monitor all your agricultural fields."
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 rounded-2xl border border-[#214B3E] bg-[#163A2A] h-[450px]"></div>

        <div className="rounded-2xl border border-[#214B3E] bg-[#163A2A] h-[450px]"></div>
      </div>

      <div className="rounded-2xl border border-[#214B3E] bg-[#163A2A] h-[300px]"></div>
    </PageLayout>
  );
}

export default Fields;