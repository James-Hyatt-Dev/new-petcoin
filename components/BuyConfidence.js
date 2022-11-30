import BlockChain from '../public/BuyConfidence/Blockchain.png'
import Fundraising from '../public/BuyConfidence/Fundraising.png'
import FastTransfers from '../public/BuyConfidence/FastTransfers.png'
import WatchDog from '../public/BuyConfidence/Watchdog.png'
import Image from 'next/image'


function BuyConfidence() {
  return (
    <div className=' bg-white text-gray-500 flex flex-col items-center py-8'>
        <div className="flex flex-col text-center w-3/4">
            <h2 className='font-bold text-3xl lg:text-4xl'>Buy With Confidence</h2>
            <p className='font-semibold text-xs lg:text-lg'>Our digital currency is fair, secure, and backed by a team of experts</p>
        </div>
        {/* first 2 items */}
        <div className="flex flex-col mt-4 md:gap-2 md:px-2 xl:flex-row">
            <div className="sm:flex md:gap-2">
                <div className="flex flex-col xl:w-[300px] xl:rounded-xl items-center px-10 text-center gap-2 sm:w-1/2 sm:border sm:bg-black sm:bg-opacity-10 sm:border-gray-300 pb-8">
                    <div className="">
                        <div className="w-20 bg-black bg-opacity-30 p-1 rounded-lg mt-8">
                            <Image src={FastTransfers} alt='' />
                        </div>
                    </div>
                    <h2 className='text-xl font-semibold lg:text-2xl'>Pay With PetCoin</h2>
                    <p className='text-xs lg:text-base'>We are in the midst of forming partnerships with industry leaders in our space who are excited to start accepting PetCoin for their goods and services to assist in our goal to give back to animals in need.</p>
                </div>

                <div className="flex flex-col xl:w-[300px] xl:rounded-xl items-center px-10 text-center gap-2 sm:w-1/2 sm:border sm:bg-black sm:bg-opacity-10 sm:border-gray-300 pb-8">
                    <div className="">
                        <div className="w-20 bg-black bg-opacity-30 p-2 rounded-lg mt-8">
                            <Image src={WatchDog} alt='' />
                        </div>
                    </div>
                    <h2 className='text-xl font-semibold lg:text-2xl'>Fully Doxxed Team</h2>
                    <p className='text-xs lg:text-base'>Unlike most projects, we are a completely public facing team. We have a full staff and you can reach out and interact with them at any time. We will be holding weekly meetings in our social communities</p>
                </div>
            </div>
            {/* second 2 items */}
            <div className="sm:flex md:gap-2">
                <div className="flex flex-col xl:w-[300px] xl:rounded-xl items-center px-10 text-center gap-2 sm:w-1/2 sm:border sm:bg-black sm:bg-opacity-10 sm:border-gray-300 pb-8">
                    <div className="">
                        <div className="w-20 bg-black bg-opacity-30 p-1 rounded-lg mt-8">
                            <Image src={BlockChain} alt='' />
                        </div>
                    </div>
                    <h2 className='text-xl font-semibold lg:text-2xl'>Block Chain Powered</h2>
                    <p className='text-xs lg:text-base'>Unlike most projects, we are a completely public facing team. We have a full staff and you can reach out and interact with them at any time. We will be holding weekly meetings in our social communities</p>
                </div>

                <div className="flex flex-col xl:w-[300px] xl:rounded-xl items-center px-10 text-center gap-2 sm:w-1/2 sm:border sm:bg-black sm:bg-opacity-10 sm:border-gray-300 pb-8">
                    <div className="">
                        <div className="w-20 bg-black bg-opacity-30 p-2 rounded-lg mt-8">
                            <Image src={Fundraising} alt='' />
                        </div>
                    </div>
                    <h2 className='text-xl font-semibold lg:text-2xl'>Donations</h2>
                    <p className='text-xs lg:text-base'>With every single transaction we are contributing a portion of the reflections collected to a charity wallet where 100% of funds will be used to change the lives of animals around the world.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BuyConfidence