import React from 'react'

function Card() {
  return (
    <div className='bg-zinc-950/70  w-48 h-60  rounded-2xl overflow-hidden'>
        <div className=' w-full h-[10%] py-2 px-2 text-zinc-400'>
           <p className='text-[0.7vw]'>16/06/2024</p> 
        </div>
        
        <div className=' w-full h-[70%] p-6 flex items-center text-center '>
            <p className='text-white text-[0.8vw] font-thin tracking-tight leading-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quidem illum quasi quae.</p>
        </div>
        
        <button className='w-full bg-green-700 h-[20%] flex items-center justify-center hover:bg-green-900'>
            <h3 className='text-zinc-400 text-sm font-bold'>Complete</h3>
        </button>
    </div>
  )
}

export default Card