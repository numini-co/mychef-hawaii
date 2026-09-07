/**
 * myCHEF wordmark — geometric sans, currentColor.
 * Island identity lives in IslandMark, placed beside this lockup.
 */
export default function Wordmark({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 118 28"
      role="img"
      aria-label="myCHEF Hawaii"
      className={className}
      fill="currentColor"
    >
      <text
        x="0"
        y="19"
        fontFamily="'Archivo', system-ui, sans-serif"
        fontWeight="500"
        fontSize="19"
        letterSpacing="0.02em"
      >
        myCHEF
      </text>
      <text
        x="0"
        y="27"
        fontFamily="'Archivo', system-ui, sans-serif"
        fontWeight="400"
        fontSize="7"
        letterSpacing="0.42em"
      >
        HAWAII
      </text>
    </svg>
  );
}
