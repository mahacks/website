import { selectRandom } from 'lib/util'
import { useMemo } from 'react'
import Shape from './Shape'

const ShapeRain: React.FC<{
  count: number
}> = ({ count }) => {
  const shapes = useMemo(() => {
    const arr = []
    for (let i = 0; i < count; i++) {
      arr.push(
        <Shape
          type={selectRandom(['circle', 'triangle', 'rect'])}
          id={i}
          color={selectRandom(['red', 'orange', 'blue', 'green'])}
          reverseAnimation={Math.random() > 0.5}
          style={{
            position: 'absolute',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.25 + 0.75,
          }}
        />
      )
    }
    return arr
  }, [count])

  return (
    <div className="absolute h-full w-full overflow-hidden">
      <div className="absolute h-[200%] w-full animate-slow-slide">
        <div className='relative h-full'>{shapes}</div>
        <div className='relative h-full'>{shapes}</div>
      </div>
    </div>
  )
}

export default ShapeRain
