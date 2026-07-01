import PageLayout from "../../components/layout/PageLayout";

function Crops() {
  return (
    <PageLayout
      title="Crops"
      subtitle="Track crop growth, health and harvest information."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="h-48 rounded-2xl bg-[#163A2A] border border-[#214B3E]"></div>

        <div className="h-48 rounded-2xl bg-[#163A2A] border border-[#214B3E]"></div>

        <div className="h-48 rounded-2xl bg-[#163A2A] border border-[#214B3E]"></div>

        <div className="h-48 rounded-2xl bg-[#163A2A] border border-[#214B3E]"></div>
      </div>

      <div className="rounded-2xl bg-[#163A2A] border border-[#214B3E] h-[350px]"></div>
    </PageLayout>
  );
}

export default Crops;