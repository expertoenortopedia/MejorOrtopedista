export function KneeIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 2c0 0-1 3-1 5s1 3 1 5c0 1.5-0.5 2.5-1.5 4L6 20.5" />
      <path d="M14 2c0 0 1 3 1 5s-1 3-1 5c0 1.5 0.5 2.5 1.5 4L18 20.5" />
      <ellipse cx="12" cy="11.5" rx="4" ry="2.5" />
      <circle cx="12" cy="11.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
