import React from 'react'
import { Great_Vibes } from 'next/font/google';

// Cargar la fuente
const greatVibes = Great_Vibes({
  weight: '400', // Solo un peso está disponible para esta fuente
  subsets: ['latin'], // Subconjunto recomendado
});

const Logo = () => {
  return (
    <div className='flex-1'>
        <div className={`${greatVibes.className} w-fit `}>
            <span className=' whitespace-nowrap flex items-center justify-center p-3 text-gray-800 rounded-tr-2xl rounded-bl-2xl text-2xl' >
                Pablo Alonso
            </span>
         </div>
    </div>
  )
}

export default Logo