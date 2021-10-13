import Head from 'next/head'
import Header from '../components/Header'
import Banner from './../components/Banner';
import MediumCard from './../components/MediumCard';
import LargeCard from './../components/LargeCard';
import Footer from './../components/Footer';

export default function Home({exploreData, cardData}) {
  console.log(cardData);
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <Banner />
      <main className='max-w-7xl mx-auto px-8 sm:px-16'>

        <section>
          <h2 className='text-4xl font-semibold py-8 text-gray-500 ml-3'>Find your favorite place</h2>
          <div className='flex space-x-4 overflow-scroll scrollbar-hide p3 ml-3 '>
              {cardData?.map((item, index)=>{
                return (
                  <MediumCard key={index} image={item.img} title={item.title} />
                )
              })}
          </div>
   

        </section>





      <section class="relative pt-12 bg-blueGray-50">
      <div class="items-center flex flex-wrap">
        <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
          <img alt="..." class="max-w-full h-[430px] rounded-lg shadow-lg" src="https://links.papareact.com/kji" />
        </div>
        <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
          <div class="md:pr-12">
            <div class="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-red-300 mt-8">
              <i class="fas fa-rocket text-xl"></i>
            </div>
            <h3 class="text-3xl font-semibold">A growing marketplace</h3>
            <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis libero, dolorem provident similique itaque voluptatem eum nulla debitis. Pariatur nemo exercitationem est odit commodi ex sapiente neque vitae enim adipisci.
            </p>
            <ul class="list-none mt-6">
              <li class="py-2">
                <div class="flex items-center">
                  <div>
                    <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i class="fas fa-fingerprint"></i></span>
                  </div>
                  <div>
                    <h4 class="text-blueGray-500">
                      Carefully crafted components
                    </h4>
                  </div>
                </div>
              </li>
              <li class="py-2">
                <div class="flex items-center">
                  <div>
                    <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i class="fab fa-html5"></i></span>
                  </div>
                  <div>
                    <h4 class="text-blueGray-500">Amazing page examples</h4>
                  </div>
                </div>
              </li>
              <li class="py-2">
                <div class="flex items-center">
                  <div>
                    <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i class="far fa-paper-plane"></i></span>
                  </div>
                  <div>
                    <h4 class="text-blueGray-500">Dynamic components</h4>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      </section>


      <section class="relative pt-12 bg-gradient-to-r mt-10 rounded-lg">
      <div class="items-center flex flex-wrap">
     
        <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
          <div class="md:pr-12">
            <div class="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-red-300 mt-8">
              <i class="fas fa-rocket text-xl"></i>
            </div>
            <h3 class="text-3xl font-semibold">A growing marketplace</h3>
            <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis libero, dolorem provident similique itaque voluptatem eum nulla debitis. Pariatur nemo exercitationem est odit commodi ex sapiente neque vitae enim adipisci.
            </p>
            <ul class="list-none mt-6">
              <li class="py-2">
                <div class="flex items-center">
                  <div>
                    <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i class="fas fa-fingerprint"></i></span>
                  </div>
                  <div>
                    <h4 class="text-blueGray-500">
                      Carefully crafted components
                    </h4>
                  </div>
                </div>
              </li>
              <li class="py-2">
                <div class="flex items-center">
                  <div>
                    <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i class="fab fa-html5"></i></span>
                  </div>
                  <div>
                    <h4 class="text-blueGray-500">Amazing page examples</h4>
                  </div>
                </div>
              </li>
              <li class="py-2">
                <div class="flex items-center">
                  <div>
                    <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i class="far fa-paper-plane"></i></span>
                  </div>
                  <div>
                    <h4 class="text-blueGray-500">Dynamic components</h4>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
          <img alt="..." class="max-w-full h-[430px] rounded-lg shadow-lg" src="https://links.papareact.com/5j2" />
        </div>
      </div>

      </section>



      <LargeCard
          image='https://links.papareact.com/4cj'
          title='The greatest outdoors'
          description="The greaters place to live"
          buttonText='Get Inspired'
        />







      </main>
      <Footer />
    </div>
  )
}
export async function getStaticProps(){

  const exploreData = await fetch ('https://links.papareact.com/pyp').
  then(
    (res)=> res.json()

  );

  const cardData = await fetch ('https://links.papareact.com/zp1').
  then(
    (res)=> res.json()

  );





return {
  props: {
    exploreData,
    cardData,
  },
}
}