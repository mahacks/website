import clsx from 'clsx'

const Shape: React.FC<{
  type: 'circle' | 'triangle' | 'rect'
  /** Must be unique shape identifier on page */
  id: string | number
  color: 'red' | 'orange' | 'blue' | 'green'
  style?: React.CSSProperties
  reverseAnimation?: boolean
}> = ({ id, type, color, style, reverseAnimation }) => {
  const shape = {
    circle: (
      <circle
        cx="19.9346"
        cy="19.7911"
        r="10.149"
        transform="rotate(179.935 19.9346 19.7911)"
        strokeWidth="2"
      />
    ),
    triangle: (
      <path
        d="M19.5726 10.4592C20.3424 9.12584 22.2669 9.12583 23.0367 10.4592L32.7564 27.2943C33.5262 28.6276 32.564 30.2943 31.0244 30.2943H11.5848C10.0452 30.2943 9.08298 28.6277 9.85278 27.2943L19.5726 10.4592Z"
        transform="translate(-1 0)"
        strokeWidth="2"
      />
      // <polygon points="10,29 20,11 30,29" strokeWidth={'2'} />
    ),
    rect: <rect x="10" y="10" width="20" height="20" rx="2" strokeWidth="2" />,
  }[type]

  const blurColorMatrix = {
    red: (
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0.8 0"
      />
    ),
    orange: (
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 1 0 0 0 0 0.647059 0 0 0 0 0 0 0 0 0.8 0"
      />
    ),
    blue: (
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 0.0666667 0 0 0 0 0.552941 0 0 0 0 0.941176 0 0 0 0.8 0"
      />
    ),
    green: (
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0.501961 0 0 0 0 0 0 0 0 0.8 0"
      />
    ),
  }[color]

  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      className={clsx(
        {
          red: 'stroke-accent-red',
          orange: 'stroke-accent-orange',
          green: 'stroke-accent-green',
          blue: 'stroke-accent-blue',
        }[color],
        'animate-slow-spin',
        reverseAnimation && 'animate-slow-spin-reverse'
      )}
    >
      <g filter={`url(#shape_filter_${id})`}>{shape}</g>
      <defs>
        <filter
          id={`shape_filter_${id}`}
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
          {blurColorMatrix}
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result={`shape_effect_${id}`}
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2={`shape_effect_${id}`}
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}

export default Shape
