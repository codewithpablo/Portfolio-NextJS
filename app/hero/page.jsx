"use client"
import React from 'react'
import { Button } from '@/components/ui/button';
import Image from 'next/image'
import { Typewriter } from 'react-simple-typewriter';
import Badge from '@/components/custom/Badge';

const Hero = () => {
  return (
    <div className='flex flex-col gap-10 lg:gap-0 lg:flex-row min-h-[500px] py-10 lg:py-0 max-w-[1200px] px-5 lg:px-0 mx-auto'>
        {/* Contenido de texto */}
        <div className='flex-1 flex flex-col justify-center gap-5'>
            <h1 className='text-center lg:text-left text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-80 my-20 md:my-0'>
                Hello, I'm Pablo: <br />
                <Typewriter
                    words={[" a front-end dev.", ' a code lover', " a web builder"]}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
            </h1>
            <p className='text-sm sm:text-base lg:text-lg'>
                I’m a dedicated front-end developer passionate about creating dynamic and user-friendly digital experiences. I thrive on solving challenges and bringing ideas to life through well-structured and efficient solutions.
            </p>
            <div className='flex justify-center lg:justify-start gap-5'>
                <Button className="w-[150px] bg-red-500 text-white rounded-[5px] transform transition-all hover:scale-105 hover:bg-red-500">
                    Explore more
                </Button>
                <Button className="w-[150px] bg-gray-800 text-white rounded-[5px] transform transition-all hover:scale-105 hover:bg-gray-800">
                    Contact me
                </Button>
            </div>
        </div>

        {/* Imagen y badges */}
        <div className="relative flex-1 flex flex-col items-center justify-center w-full p-4 space-y-6 lg:flex-row lg:space-y-0 lg:space-x-6">
  {/* Badges flotantes versión desktop */}
  <div className="absolute hidden lg:flex left-0 top-10 bg-white rounded-2xl floating-element floating-element-1 overflow-hidden">
    <Badge
      icon="layers.svg"
      badgeText="projects built"
      endCountNum={10}
    />
  </div>
  <div className="absolute hidden lg:flex left-0 bottom-10 bg-white rounded-2xl floating-element floating-element-2 overflow-hidden">
    <Badge
      icon="layers.svg"
      badgeText="work simulations"
      endCountNum={3}
    />
  </div>
  
  {/* Imagen principal */}
  <div className="relative w-60 h-60 lg:w-72 lg:h-72">
    <Image
      src="/pablo-hero.jpg"
      fill
      alt="Hero Image"
      className="rounded-full object-cover"
    />
  </div>

  {/* Badges flotantes versión mobile */}
  <div className="flex flex-col items-center space-y-4 lg:hidden">
    <div className="flex bg-white rounded-2xl floating-element overflow-hidden">
      <Badge
        icon="layers.svg"
        badgeText="projects built"
        endCountNum={10}
      />
    </div>
    <div className="flex bg-white rounded-2xl floating-element overflow-hidden">
      <Badge
        icon="layers.svg"
        badgeText="work simulations"
        endCountNum={3}
      />
    </div>
    <div className="flex bg-white rounded-2xl floating-element overflow-hidden">
      <Badge
        icon="list.svg"
        badgeText="years of experience"
        endCountNum={2}
      />
    </div>
  </div>

  {/* Badges flotantes versión desktop */}
  <div className="absolute hidden lg:flex -right-5 top-auto bg-white rounded-2xl floating-element floating-element-3 overflow-hidden">
    <Badge
      icon="list.svg"
      badgeText="years of experience"
      endCountNum={2}
    />
  </div>
</div>

    </div>
  )
}

export default Hero;
