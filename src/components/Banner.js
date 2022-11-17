import React from 'react'
import { FiSearch } from "react-icons/fi"
const Banner = () => {
    return (
        <div className='relative h-[25rem] mx-6 mt-4 rounded-[0.3rem] z-10'>
            {/* Imagen */}
            <div className='absolute flex w-full'>
                <img className='object-cover w-screen rounded-[0.3rem]' src="/banner.webp" alt="" />
            </div>
            {/* Overlay */}
            <div className="absolute flex w-full h-full bg-black/20 z-10 rounded-[0.3rem]">

            </div>

            {/* Busqueda */}
            <div className='relative z-20 text-center flex flex-col items-center justify-center h-full font-bold'>
                <p className='text-[35px] text-white pb-2'>Encuentra tu comunidad en Discord</p>
                <p className='text-[25px] text-white pb-2'>Desde juegos, música,.. hasta para estudiar hay un lugar para ti.</p>
                <div className='relative flex items-center justify-end'>
                    <input className='bg-white rounded-[0.3rem] w-[30rem] px-3  h-10 outline-0 ' type="search" name="" id="" placeholder='Explora servidores' />
                    <FiSearch className="absolute text-black right-2" />
                </div>
            </div>
        </div>
    )
}

export default Banner