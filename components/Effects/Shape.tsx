const Shape: React.FC<{
  type: 'circle' | 'triangle' | 'rect'
  key: string | number
  className: string
}> = ({ key, type, className }) => {
  const shape = (() => {
    if (type === 'circle')
      return (
        <circle
          className={className}
          cx="19.9346"
          cy="19.7911"
          r="10.149"
          transform="rotate(179.935 19.9346 19.7911)"
          strokeWidth="2"
        />
      )
    if (type === 'triangle')
      return (
        <path
        className={className}
          d="M19.5726 10.4592C20.3424 9.12584 22.2669 9.12583 23.0367 10.4592L32.7564 27.2943C33.5262 28.6276 32.564 30.2943 31.0244 30.2943H11.5848C10.0452 30.2943 9.08298 28.6277 9.85278 27.2943L19.5726 10.4592Z"
          strokeWidth="2"
        />
      )
    if (type === 'rect')
      return (
        <rect
        className={className}
          x="27.2979"
          y="29.9286"
          width="20.2979"
          height="20.2979"
          rx="2"
          transform="rotate(-180 27.2979 29.9286)"
          strokeWidth="2"
        />
      )
  })()

  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter={`url(#shape_filter_${key})`}>{shape}</g>
      <defs>
        <filter
          id={`shape_filter_${key}`}
          x="0"
          y="0"
          width="40"
          height="40"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="4" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0.8 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_361"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_361"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}

export default Shape
