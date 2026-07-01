import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex bg-[#081C15] text-white">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Navbar />

        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

export default MainLayout;