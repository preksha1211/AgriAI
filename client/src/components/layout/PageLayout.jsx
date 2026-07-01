import MainLayout from "./MainLayout";

function PageLayout({ title, subtitle, children }) {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-white">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-2 text-[#B7E4C7]">
              {subtitle}
            </p>
          )}
        </div>

        {children}
      </div>
    </MainLayout>
  );
}

export default PageLayout;