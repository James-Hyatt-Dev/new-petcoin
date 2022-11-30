import Image from 'next/image'
import ShelterCat from '../public/CTA/ShelterCat.webp'
import PetRescueLogo from '../public/CTA/PetRescueLogo.webp'
import Link from 'next/link'

function CTA() {
  return (
    <div className="bg-orange-500 py-8">

        <div className="flex flex-col gap-2 xl:pl-40">
            <h2 className="text-white text-2xl text-center font-semibold lg:text-3xl xl:text-left xl:pl-4">Ready to Make a Difference?</h2>
            <p className='text-center px-4 text-xs lg:text-base xl:w-1/2 xl:text-left'>PetRescue was born to make the adoption process seamless and easy. If you are looking to adopt a pet or just looking to help find a home for a pet that needs one, we’re here to help.</p>
        </div>

        <div className="flex flex-col items-center py-4 sm:flex-row sm:justify-around sm:items-center xl:flex-row-reverse">

            <div className="w-40 sm:w-60 xl:-mt-20">
                <Image className='rounded-xl' src={ShelterCat} alt='shelter cat photo-graphed inside a cage' />
            </div>

            <div className="flex flex-col md:flex-row md:items-center md:gap-8">
                <div className="flex flex-col py-2 mx-auto">
                    <Image src={PetRescueLogo} alt='pet rescue logo www dot pet rescue dot com' />
                    <p className='italic text-xs font-extralight text-center'>Powered by PetCoin</p>
                </div>
                <div className="text-center bg-white text-orange-600 py-2 px-8 rounded font-semibold uppercase md:items-center md:flex md:h-10">
                    <Link href='https://petrescue.love'>Learn More</Link>
                </div>
            </div>

        </div>
        
    </div>
  )
}

export default CTA