import { Menu, ChevronDown, LogOut } from "lucide-react";
import { useState, useRef, useEffect } from "react";

type Props = {
  title: string;
  onMenuClick?: () => void;
  adminName?: string;
  onLogout?: () => void;
};

export default function Topbar({
  title,
  onMenuClick,
  adminName = "Admin",
  onLogout,
}: Props) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Generate initials
  const initials = adminName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="
        sticky top-0 z-30
        bg-white
        border-b border-gray-100
        px-6 py-4
        flex items-center justify-between
        shadow-sm
      "
    >
      {/* Left */}
      <div className="flex items-center gap-3">
        {/* Mobile Menu */}
        <button
          onClick={onMenuClick}
          className="
            md:hidden
            p-2
            rounded-lg
            hover:bg-gray-100
          "
        >
          <Menu size={20} />
        </button>

        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      </div>

      {/* Right */}
      <div className="relative flex items-center gap-3" ref={dropdownRef}>
        {/* Welcome Text */}
        <div className="hidden sm:block text-right">
          <p className="text-sm text-gray-500">Welcome</p>

          <p className="text-sm font-semibold text-gray-800">{adminName}</p>
        </div>

        {/* Avatar Button */}
        <button
          onClick={() => setOpen(!open)}
          className="
            flex items-center gap-2
            hover:bg-gray-100
            px-2 py-1
            rounded-xl
          "
        >
          {/* Avatar */}
          <div
            className="
              w-9 h-9
              bg-indigo-600
              text-white
              rounded-full
              flex items-center justify-center
              text-sm font-semibold
            "
          >
            {initials}
          </div>

          <ChevronDown size={16} className="text-gray-400" />
        </button>

        {/* Dropdown */}
        {open && (
          <div
            className="
              absolute
              right-0
              top-12
              w-40
              bg-white
              border border-gray-100
              rounded-xl
              shadow-lg
              overflow-hidden
            "
          >
            {/* Future Menu Items */}
            <button
              className="
                w-full
                flex items-center gap-2
                px-4 py-2
                text-sm
                hover:bg-gray-50
              "
            >
              Profile
            </button>

            <button
              className="
                w-full
                flex items-center gap-2
                px-4 py-2
                text-sm
                hover:bg-gray-50
              "
            >
              Settings
            </button>

            {/* Divider */}
            <div className="border-t border-gray-100" />

            {/* Logout */}
            <button
              onClick={onLogout}
              className="
                w-full
                flex items-center gap-2
                px-4 py-2
                text-sm
                text-red-500
                hover:bg-red-50
              "
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
