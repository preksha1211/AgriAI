import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#081510] text-white">

      {/* Sidebar */}

      <Sidebar />

      {/* Main Content */}

      <div className="ml-[280px] min-h-screen">

        {/* Navbar */}

        <div className="sticky top-0 z-40 border-b border-[#1D3B2F] bg-[#0C1F18]/90 backdrop-blur-xl">

          <Navbar />

        </div>

        {/* Page */}

        <main className="bg-[#081510]">

          <div className="mx-auto max-w-[1500px] px-8 py-8 xl:px-10">

            {children}

          </div>

        </main>

      </div>

    </div>
  );
}

export default MainLayout;