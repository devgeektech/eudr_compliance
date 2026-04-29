import React, { ReactNode } from "react";

interface InfoCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  icon,
  title,
  description,
  className = "",
}) => {
  return (
    <div
      className={`group rounded-2xl bg-[#303032] p-6 transition-all duration-300 hover:bg-[#BF9655] ${className}`}
    >
      {/* Icon Box */}
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#BF9655] text-white transition-all duration-300 group-hover:bg-white group-hover:text-[#BF9655]">
        {icon}
      </div>

      {/* Title */}
      <h3 className="mb-3 text-xl font-semibold text-white">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm leading-6 text-white/80 group-hover:text-white">
        {description}
      </p>
    </div>
  );
};

export default InfoCard;