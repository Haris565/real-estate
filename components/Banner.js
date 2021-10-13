import { useState } from "react"
import Image from 'next/image'
import Header from './Header';
import img from "../public/banner.jpg"
import {SearchIcon, MenuIcon, UserCircleIcon, UserIcon, GlobeAltIcon} from "@heroicons/react/solid"
function Banner() {
    const [searchInput, setsearchInput] = useState('')
    return (
        <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[700px] 2xl:h-[900px] ' >
             <Header />
            <Image src={img} layout="fill" objectFit='cover' />

            <div className='absolute top-1/2 w-[600px] text-center left-1/3'>
                
                <div className='flex items-center border-2 rounded-full py-2 md:border md:shadow-sm bg-white '>


                <div class="relative inline-flex">
                    <svg class="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fill-rule="nonzero"/></svg>
                    <select class=" rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
                        <option>Islamabad</option>
                        <option>Islamabad</option>
                        <option>Islamabad</option>
                        <option>Islamabad</option>

                    </select>
                </div>

                <div class="relative inline-flex">
                    <svg class="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fill-rule="nonzero"/></svg>
                    <select class=" rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
                    
                        <option>f-7</option>
                        <option>f-6</option>
                        <option>E-11</option>
                   
                    </select>
                </div>

                    
                    <input type="text" value={searchInput} onChange={(e)=>setsearchInput(e.target.value)} 
                    placeholder={"Start your Search"} className='pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-700 ' />
                    <SearchIcon className='h-10 bg-red-400 text-white rounded-full p-2 cursor-pointer hidden md:inline-flex md:mx-2' />
                </div>
            </div>
        </div>
      
        
    )
}

export default Banner