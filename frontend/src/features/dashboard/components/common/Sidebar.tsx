import { Link, useLocation } from "react-router-dom";

import {
  LayoutDashboard,
  Users,
  UserPlus,
  GitBranch,
  CalendarDays,
} from "lucide-react";

export default function Sidebar() {
  const location = useLocation();

  const menu = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Leads",
      path: "/leads",
      icon: Users,
    },
    {
      name: "Add Lead",
      path: "/add-lead",
      icon: UserPlus,
    },
    {
      name: "Pipeline",
      path: "/pipeline",
      icon: GitBranch,
    },
    {
      name: "Calendar",
      path: "/calendar",
      icon: CalendarDays,
    },
  ];

  return (
    <div
      className="
        w-64
        h-screen
        bg-white
        border-r
        border-gray-100
        shadow-sm
        p-6
        hidden md:flex
        flex-col
        sticky top-0
      "
    >
      {/* Logo / Brand */}
      <div className="mb-10">
        <h1 className="text-2xl font-bold text-indigo-600 tracking-tight">
          LeadFlow
        </h1>

        <p className="text-xs text-gray-400 mt-1">Lead Management System</p>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2">
        {menu.map((item) => {
          const isActive = location.pathname === item.path;

          const Icon = item.icon;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`
                flex items-center gap-3
                px-4 py-2.5
                rounded-xl
                text-sm font-medium
                transition
                ${
                  isActive
                    ? "bg-indigo-50 text-indigo-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-indigo-600"
                }
              `}
            >
              <Icon size={18} />

              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Section (Future Use) */}
      <div className="mt-auto pt-6 border-t border-gray-100">
        <p className="text-xs text-gray-400">LeadFlow v1.0</p>
      </div>
    </div>
  );
}
