import { NavLink } from "react-router-dom";
import sidebarMenu from "../../utils/sidebarMenu";

function Sidebar() {
  return (
    <aside className="w-72 min-h-screen bg-[#0B241C] border-r border-[#214B3E] flex flex-col">
      {/* Logo */}
      <div className="h-20 flex items-center px-6 border-b border-[#214B3E]">
        <h1 className="text-2xl font-bold text-[#52B788]">
          AgriAI
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {sidebarMenu.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.id}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-4 rounded-xl px-4 py-3 transition-all duration-200 ${
                      isActive
                        ? "bg-[#2D6A4F] text-white"
                        : "text-[#B7E4C7] hover:bg-[#163A2A] hover:text-white"
                    }`
                  }
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.name}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;