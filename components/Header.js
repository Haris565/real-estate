import { useState, useEffect } from "react"
import Image from "next/image"
import {SearchIcon, MenuIcon, UserCircleIcon, UserIcon, GlobeAltIcon} from "@heroicons/react/solid"

import { useRouter } from "next/dist/client/router";

function Header({placeholder}) {
    const [navbar, setNavbar] = useState(false)
    const router = useRouter()
    

    const changeBackground = () => {
        console.log(window.scrollY)
        if (window.scrollY >= 66) {
          setNavbar(true)
        } else {
          setNavbar(false)
        }
      }

    const search = () => {
        router.push({
            pathname: '/Search',
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate:endDate.toISOString(),
                guest:numberOfGuest
            }
        })
    }

    useEffect(() => {
        changeBackground()
        // adding the event when scroll change background
        window.addEventListener("scroll", changeBackground)
      })

    return (
        <header className={!navbar ? "sticky top-0 z-50 grid grid-cols-2 bg-transparent shadow-sm py-5 px-5 md:px-10 ": "sticky top-0 z-50 grid grid-cols-2 bg-white shadow-sm py-5 px-5 md:px-10 "}>

            <div className='relative flex items-center h-10 cursor-pointer my-auto ' onClick={()=>router.push('/')}>
                {/* <Image src="https://links.papareact.com/qd3" 
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                                           
                /> */}

                <h1 className={!navbar ? "px-4 text-white font-medium text-lg": "px-4 text-black font-medium text-lg" }>
                    LOGO
                </h1>
            </div>

            <div className={!navbar ? 'flex flex-row items-center justify-end space-x-4 text-white' : 'flex flex-row items-center justify-end space-x-4 text-black'}>
                <ul className='flex flex-row'>
                    <li className='px-4  font-bold text-lg cursor-pointer'>Home</li>
                    <li className='px-4  font-bold text-lg cursor-pointer'>About</li>
                    <li className='px-4  font-bold text-lg cursor-pointer'>Contact</li>
                </ul>
            </div>

            
        </header>
    )
}

export default Header
