import type { LucideIcon } from "lucide-react";

type Props = {
  title: string;
  value: number | string;
  icon: LucideIcon;
  color: string;
};

function StatsCards({ title, value, icon: Icon, color }: Props) {
  return (
    <div
      className="
        relative
        bg-white
        p-5
        rounded-2xl
        shadow-sm
        hover:shadow-md
        transition
        border border-gray-100
        overflow-hidden
      "
    >
      {/* Accent Bar */}
      <div className={`absolute top-0 left-0 w-full h-1 ${color}`} />

      <div className="flex items-center justify-between">
        {/* Left Content */}
        <div>
          <h3 className="text-sm text-gray-500 font-medium">{title}</h3>

          <p className="text-3xl font-bold text-gray-800 mt-1">{value}</p>
        </div>

        {/* Icon */}
        <div
          className={`
            w-12 h-12
            rounded-xl
            flex items-center justify-center
            ${color}
            bg-opacity-10
          `}
        >
          <Icon size={22} className={`${color} text-opacity-90`} />
        </div>
      </div>
    </div>
  );
}

export default StatsCards;
