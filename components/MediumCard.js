import Image from "next/image"
import {HeartIcon} from "@heroicons/react/outline"
function MediumCard({image, title}) {

    return (
        <div className='cursor-pointer hover:scale-105 transform transition duration-300 ease-out py-10'>
            <div className='relative h-80 w-80'>
                <Image src="https://links.papareact.com/2io"layout='fill' className='rounded-xl'/>
                <div className=' absolute left-[85%] mt-2'>
                    <HeartIcon className='h-8 text-white' />
                </div>
            </div>
            <div>
                <div className='flex flex-row justify-around'>
                    <h3 className='text-medium mt-3 text-center'>2 bedrooms</h3>
                    <h3 className='text-medium mt-3 text-center'>2 baths</h3>
                    <h3 className='text-medium mt-3 text-center'>7 marla</h3>
                </div>

                <div className='flex flex-row justify-around'>
                    <h3 className='text-medium mt-3 text-center'>Arabian Mall bahria town phase 3</h3>
                </div>
            
            </div>
            
        </div>
    )
}

export default MediumCard