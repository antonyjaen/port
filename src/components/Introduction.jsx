import Atropos from 'atropos/react'
import React from 'react'

export const Introduction = () => {
  return (
    <Atropos
      activeOffset={100}
      shadow={false}
      highlight={false}
      shadowScale={1.10}
        
      onEnter={() => console.log('Enter')}
      onLeave={() => console.log('Leave')}
      onRotate={(x, y) => console.log('Rotate', x, y)}
    >
      <div className="h-screen flex flex-col justify-center items-center text-white text-xl mt-[-20vh]">
        <div className="text-center">
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Hello, I&apos;m</h3>
        </div>
        <div className="mt-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl">Antony Jaen Viquez</h1>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Fullstack Developer</h3>
        </div>
      </div>

    </Atropos>
  )
}
