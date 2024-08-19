import React from 'react'
import { IoMdAddCircle } from "react-icons/io";

function Add() {
  return (
    <div className='p-20 flex items-center justify-end'>
        <button className=' absolute bottom-[18%] right-[6%] text-[7vw] text-green-900 hover:text-green-950'><IoMdAddCircle /></button>
    </div>
  )
}

export default Add