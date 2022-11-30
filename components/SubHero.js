import Image from 'next/image'
import WithPurpose from '../public/SubHero/WithPurpose.png'
import HappyHealthy from '../public/SubHero/HappyHealthy.png'
import WorldChanging from '../public/SubHero/WorldChanging.png'
import BuyConfidence from '../public/SubHero/BuyConfidence.png'

function SubHero() {
  return (
    <div className=' bg-white text-gray-500 flex flex-col items-center py-8'>
        <div className="flex flex-col text-center w-3/4">
            <h2 className='font-bold text-3xl lg:text-4xl'>Donation Focused</h2>
            <p className='font-semibold text-xs lg:text-lg'>Each transaction is taxed 1.5% with a portion of that tax going to our Charity Wallet.</p>
        </div>
        {/* first 2 items */}
        <div className="flex flex-col mt-4 md:gap-2 md:px-2 xl:flex-row">
            <div className="sm:flex md:gap-2">
                <div className="flex flex-col xl:w-[300px] xl:rounded-xl items-center px-10 text-center gap-2 sm:w-1/2 sm:border sm:bg-black sm:bg-opacity-10 sm:border-gray-300 pb-8">
                    <div className="">
                        <div className="w-20 bg-black bg-opacity-30 p-1 rounded-lg mt-8">
                            <Image src={WithPurpose} alt='' />
                        </div>
                    </div>
                    <h2 className='text-xl font-semibold lg:text-2xl'>With a Purpose</h2>
                    <p className='text-xs lg:text-base'>Petcoin is dedicated to changing the world we live in starting with our pets. Our Token is built with an automatic donation mechanism that executes on every transaction.</p>
                </div>

                <div className="flex flex-col xl:w-[300px] xl:rounded-xl items-center px-10 text-center gap-2 sm:w-1/2 sm:border sm:bg-black sm:bg-opacity-10 sm:border-gray-300 pb-8">
                    <div className="">
                        <div className="w-20 bg-black bg-opacity-30 p-2 rounded-lg mt-8">
                            <Image src={HappyHealthy} alt='' />
                        </div>
                    </div>
                    <h2 className='text-xl font-semibold lg:text-2xl'>Happy and Healthy</h2>
                    <p className='text-xs lg:text-base'>We know you love your furry friends as much as we do because they are part of all of our families. The joy and laughter they bring is amazing. We are asking you to join us in this worthwhile effort and support the idea of responsible pet ownership around the world.</p>
                </div>
            </div>
            {/* second 2 items */}
            <div className="sm:flex md:gap-2">
                <div className="flex flex-col xl:w-[300px] xl:rounded-xl items-center px-10 text-center gap-2 sm:w-1/2 sm:border sm:bg-black sm:bg-opacity-10 sm:border-gray-300 pb-8">
                    <div className="">
                        <div className="w-20 bg-black bg-opacity-30 p-1 rounded-lg mt-8">
                            <Image src={WorldChanging} alt='' />
                        </div>
                    </div>
                    <h2 className='text-xl font-semibold lg:text-2xl'>World Changing</h2>
                    <p className='text-xs lg:text-base'>By leveraging blockchain technology we are able to give you the confidence of knowing where your donation is going. All donations are public and verifiable via the blockchain.</p>
                </div>

                <div className="flex flex-col xl:w-[300px] xl:rounded-xl items-center px-10 text-center gap-2 sm:w-1/2 sm:border sm:bg-black sm:bg-opacity-10 sm:border-gray-300 pb-8">
                    <div className="">
                        <div className="w-20 bg-black bg-opacity-30 p-2 rounded-lg mt-8">
                            <Image src={BuyConfidence} alt='' />
                        </div>
                    </div>
                    <h2 className='text-xl font-semibold lg:text-2xl'>Buy with Confidence</h2>
                    <p className='text-xs lg:text-base'>PetCoin will launch with a full Certik Audit completed as well as a live real time tracker which can be found on our website which will allow our customers to donate and shop with confidence.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SubHero