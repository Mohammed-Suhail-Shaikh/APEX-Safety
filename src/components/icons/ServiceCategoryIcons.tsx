type IconProps = {
  className?: string
}

export function SystemSafetyIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M20 4.5L32.5 9.2V18.8C32.5 26.1 27.2 32.6 20 35.5C12.8 32.6 7.5 26.1 7.5 18.8V9.2L20 4.5Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M14 19.5H26M14 24H22.5M17.5 14.5H22.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M14 14.5H15.2"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function PeopleSafetyIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="20" cy="12" r="4.25" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M12.5 28.5C12.5 24.36 15.86 21 20 21C24.14 21 27.5 24.36 27.5 28.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <circle cx="10.5" cy="14" r="3" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M5.5 28C5.5 25.24 7.74 23 10.5 23C11.55 23 12.52 23.32 13.3 23.86"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="29.5" cy="14" r="3" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M34.5 28C34.5 25.24 32.26 23 29.5 23C28.45 23 27.48 23.32 26.7 23.86"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function IncidentResponseIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M20 6.5L34 31.5H6L20 6.5Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path d="M20 15.5V22.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <circle cx="20" cy="26.5" r="1.35" fill="currentColor" />
    </svg>
  )
}
