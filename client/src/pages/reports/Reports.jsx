import PageLayout from "../../components/layout/PageLayout";

function Reports() {
  return (
    <PageLayout
      title="Reports"
      subtitle="Generate and download detailed farm performance reports."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="h-44 rounded-2xl border border-[#214B3E] bg-[#163A2A]"></div>

        <div className="h-44 rounded-2xl border border-[#214B3E] bg-[#163A2A]"></div>

        <div className="h-44 rounded-2xl border border-[#214B3E] bg-[#163A2A]"></div>
      </div>

      <div className="mt-6 rounded-2xl border border-[#214B3E] bg-[#163A2A] h-[450px]"></div>
    </PageLayout>
  );
}

export default Reports;