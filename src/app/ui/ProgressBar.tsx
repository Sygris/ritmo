type ProgressBarProps = {
  radius: number,
  stroke: number,
  percentage: number
}

export default function ProgressBar({ radius, stroke, percentage }: ProgressBarProps) {
  const circumference = 2 * Math.PI * (radius - stroke / 2);
  const strokeLength = (percentage / 100) * circumference;

  return (
    <svg width={120} height={120} viewBox="0 0 120 120">
      <circle cx="50%" cy="50%" r={radius - stroke / 2} fill="transparent" stroke="#e5e7eb" strokeWidth={stroke} />
      <circle
        cx="50%" cy="50%" r={radius - stroke / 2}
        fill="transparent" stroke="green" strokeWidth={stroke}
        strokeDasharray={`${strokeLength}, ${circumference}`}
        strokeLinecap="round"
        transform="rotate(-90, 60, 60)"
      />
      <text x="50%" y="57%" textAnchor="middle" fontSize={24}>33%</text>
    </svg>
  )
}