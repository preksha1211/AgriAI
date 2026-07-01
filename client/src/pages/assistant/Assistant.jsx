import PageLayout from "../../components/layout/PageLayout";

function Assistant() {
  return (
    <PageLayout
      title="AI Assistant"
      subtitle="Get intelligent farming recommendations and answers powered by AI."
    >
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Chat Area */}
        <div className="xl:col-span-2 h-[600px] rounded-2xl border border-[#214B3E] bg-[#163A2A]"></div>

        {/* Suggestions */}
        <div className="h-[600px] rounded-2xl border border-[#214B3E] bg-[#163A2A]"></div>
      </div>
    </PageLayout>
  );
}

export default Assistant;