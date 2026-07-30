export function SatelliteIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="9" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.4" />
      <path d="M9 11H5a1 1 0 0 0-1 1v0a1 1 0 0 0 1 1h4" stroke="currentColor" strokeWidth="1.4" />
      <path d="M15 11h4a1 1 0 0 1 1 1v0a1 1 0 0 1-1 1h-4" stroke="currentColor" strokeWidth="1.4" />
      <path d="M2 9l2 2M2 15l2-2M22 9l-2 2M22 15l-2-2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M12 15v3M10.5 20.5L12 18l1.5 2.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </svg>
  );
}

export function DroneIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="10" y="10.5" width="4" height="3" rx="0.8" stroke="currentColor" strokeWidth="1.4" />
      <path d="M10 11L5 6M14 11l5-5M10 13l-5 5M14 13l5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="4.5" cy="5" r="2" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="19.5" cy="5" r="2" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="4.5" cy="19" r="2" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="19.5" cy="19" r="2" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function AIIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="4" cy="6" r="1.6" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="20" cy="6" r="1.6" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="4" cy="18" r="1.6" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="20" cy="18" r="1.6" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M5.4 7.1L10.3 11M18.6 7.1L13.7 11M5.4 16.9L10.3 13M18.6 16.9L13.7 13"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}
