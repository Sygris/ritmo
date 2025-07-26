type ProgressBarCalculatedProps = {
  normalizedRadius: number,
  circumference: number;
  strokeLength: number;
}

const calculateProgressBar = (
  radius: number,
  stroke: number,
  percentage: number
) : ProgressBarCalculatedProps => {
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeLength = (percentage / 100) * circumference;

  return { normalizedRadius, circumference, strokeLength };
};

type ProgressBarProps = {
  radius: number,
  stroke: number,
  percentage: number
}

export default function ProgressBar({ radius, stroke, percentage }: ProgressBarProps) {
  const {normalizedRadius, circumference, strokeLength} = calculateProgressBar(radius, stroke, percentage);

  return (
    <svg width={120} height={120} viewBox="0 0 120 120">
      {/* Background Circle */}
      <circle 
        cx="50%"
        cy="50%"
        r={normalizedRadius}
        fill="transparent"
        stroke="#e5e7eb"
        strokeWidth={stroke} 
      />
      {/* Filled Circle */}
      <circle
        cx="50%" 
        cy="50%" 
        r={normalizedRadius}
        fill="transparent" 
        stroke="#059669" 
        strokeWidth={stroke}
        strokeDasharray={`${strokeLength}, ${circumference}`}
        strokeLinecap="round"
        transform="rotate(-90, 60, 60)"
      />
      <text x="50%" y="57%" textAnchor="middle" fontSize={24}>
        {`${percentage}`}%
      </text>
    </svg>
  )
}