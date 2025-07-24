type ProgressBarProps = {
  radius: number,
  stroke: number
}

export default function ProgressBar() {
  return (
    <>
      <svg width={120} height={120}>
        <circle cx="50%" cy="50%" r="57"fill="transparent" stroke="black" strokeWidth={6} />
        <text x="50%" y="66" textAnchor="middle" fontSize={24}>33%</text>
      </svg>
    </>
  )
}