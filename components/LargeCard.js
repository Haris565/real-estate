import Image from 'next/image'

function LargeCard({image,title,description,buttonText}) {
    return (
        <section className='relative py-16 cursor-pointer'>
            <div className='relative h-96 min-w-[300px] bg-gradient-to-r from-red-500 to-red-300 rounded-2xl'>
                {/* <Image src={image} layout='fill' objectFit='cover' className='rounded-2xl'  /> */}
            </div>
            
            <div className='absolute top-32 left-12'>
                <h3 className="text-4xl mb-3 w-64">Lorem Ipsum</h3>
                <p>The best place to sell and buy your property</p>
                <button className='text-sm bg-gray-900 text-white px-4 py-2 rounded-lg mt-5'>{buttonText}</button>
            </div>
        </section>
    )
}

export default LargeCard