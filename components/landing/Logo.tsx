"use client";

export default function Logo() {
  return (
    <div className="flex items-center">
      <svg
        width="60"
        height="60"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-yellow-500"
      >
        {/* Top diamond */}
        <polygon points="50,5 55,12 50,20 45,12" fill="currentColor" />

        {/* Horizontal bar */}
        <line
          x1="20"
          y1="30"
          x2="80"
          y2="30"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Center pillar */}
        <line
          x1="50"
          y1="20"
          x2="50"
          y2="65"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Left scale */}
        <line
          x1="30"
          y1="30"
          x2="25"
          y2="50"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="25" cy="55" r="10" stroke="currentColor" strokeWidth="3" />

        {/* Right scale */}
        <line
          x1="70"
          y1="30"
          x2="75"
          y2="50"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="75" cy="55" r="10" stroke="currentColor" strokeWidth="3" />

        {/* Base */}
        <rect
          x="35"
          y="65"
          width="30"
          height="6"
          rx="2"
          fill="currentColor"
        />

        {/* Bottom platform */}
        <rect
          x="25"
          y="75"
          width="50"
          height="6"
          rx="2"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}