import PageLayout from "../../components/layout/PageLayout";

function Notifications() {
  return (
    <PageLayout
      title="Notifications"
      subtitle="View all alerts, reminders and AI-generated notifications."
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 rounded-2xl border border-[#214B3E] bg-[#163A2A] h-[550px]"></div>

        <div className="rounded-2xl border border-[#214B3E] bg-[#163A2A] h-[550px]"></div>
      </div>
    </PageLayout>
  );
}

export default Notifications;