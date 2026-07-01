import PageLayout from "../../components/layout/PageLayout";

function Settings() {
  return (
    <PageLayout
      title="Settings"
      subtitle="Manage your account, preferences and application settings."
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile */}
        <div className="rounded-2xl border border-[#214B3E] bg-[#163A2A] h-[260px]"></div>

        {/* Preferences */}
        <div className="rounded-2xl border border-[#214B3E] bg-[#163A2A] h-[260px]"></div>

        {/* Security */}
        <div className="rounded-2xl border border-[#214B3E] bg-[#163A2A] h-[260px]"></div>
      </div>

      <div className="rounded-2xl border border-[#214B3E] bg-[#163A2A] h-[320px]"></div>
    </PageLayout>
  );
}

export default Settings;