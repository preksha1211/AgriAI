import {
  Search,
  Bell,
  Globe,
  Sun,
  UserCircle,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="h-20 bg-[#163A2A] border-b border-[#214B3E] px-8 flex items-center justify-between">
      {/* Search */}
      <div className="w-[420px]">
        <div className="flex items-center gap-3 bg-[#0B241C] px-4 py-3 rounded-xl">
          <Search size={18} className="text-[#B7E4C7]" />

          <input
            type="text"
            placeholder="Search..."
            className="flex-1 bg-transparent outline-none text-white placeholder:text-[#B7E4C7]"
          />
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-5">
        <button className="text-[#B7E4C7] hover:text-white">
          <Globe size={22} />
        </button>

        <button className="text-[#B7E4C7] hover:text-white">
          <Sun size={22} />
        </button>

        <button className="relative text-[#B7E4C7] hover:text-white">
          <Bell size={22} />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-red-500"></span>
        </button>

        <div className="flex items-center gap-3">
          <UserCircle size={36} className="text-[#52B788]" />

          <div>
            <h4 className="font-semibold">Preksha</h4>
            <p className="text-xs text-[#B7E4C7]">Farmer</p>
          </div>
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-white transition hover:bg-red-700"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </header>
  );
}

export default Navbar;