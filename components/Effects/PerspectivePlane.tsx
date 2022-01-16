const PerspectivePlane = ({}) => {
  return (
    <div
      className="z"
      style={{
        transform: 'perspective(1000px) rotateX(80deg)',
      }}
    >
      <div className="animate-slow-panning absolute top-0 left-0 w-[300%] h-[300vh]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <rect width="80" height="80" fill="url(#smallGrid)" />
              <path
                d="M 80 0 L 0 0 0 80"
                className="stroke-1 fill-transparent stroke-secondary-400"
              />
            </pattern>
          </defs>

          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </div>
  )
}

export default PerspectivePlane
