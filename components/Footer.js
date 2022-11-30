import Image from 'next/image'
import PetLogoImage from '../public/Footer/PetLogoImage.webp'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
solid,
regular,
brands,
icon,
duotone
} from '@fortawesome/fontawesome-svg-core/import.macro'

function Footer() {
    let date = new Date().getFullYear();

  return (
    <div className="w-full bg-orange-500">
        {/* links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 text-center gap-2 items-center max-w-5xl mx-auto">

            <div className='flex flex-col'>
                <h2 className="text-sm uppercase font-semibold underline">Useful Links</h2>
                <a className='text-xs' href="https://petrescue.love">PetRescue.love</a>
                <a className='text-xs' href="https://petstore.love">PetStore.love</a>
            </div>

            <div className='flex flex-col'>
                <h2 className="text-sm uppercase font-semibold underline">Solutions</h2>
                <a className='text-xs' href="https://petcoin.love/about">About</a>
                <a className='text-xs' href="https://petcoin.love/faq">FAQs</a>
            </div>

            <div className='flex flex-col'>
                <h2 className="text-sm uppercase font-semibold underline">Legal</h2>
                <a className='text-xs' href="https://petcoin.love/privacy">Privacy Policy</a>
                <a className='text-xs' href="https://petcoin.love/terms">Terms & Conditions</a>
            </div>

            <div className='flex flex-col pb-2'>
                <h2 className="text-sm uppercase font-semibold underline">Contact</h2>
                <a className='text-xs' href="tel:18004888421">(800) 488-8421)</a>
                <p className="text-xs">1712 Pioneer Ave.<br/>Cheyenne, WY 82001</p>
            </div>
        </div>
        {/* info */}
        <div className='px-4 py-2 bg-gray-800'>
            <div className="max-w-5xl gap-2 items-center flex mx-auto">
                <div className="hidden md:flex grayscale w-10">
                    <Image src={PetLogoImage} alt='' />
                </div>
                <p className='text-xs italic text-center text-gray-500'>PetCoin is the cryptocurrency with a cause. Each time you purchase or use PetCoin, the transactions fee helps save the life of a dog or cat right here in the United States
                at on the 12,000+ Shelters and Rescues found at <a className='underline text-blue-700' href="https://petrescue.love">www.petrescue.love</a></p>
            </div>
        </div>

        {/* copyright */}
        <div className="bg-gray-800 text-xs w-full flex flex-col sm:flex-row items-center gap-2 justify-around pb-24 lg:pb-2 border-t border-gray-500 pt-2">
            <div className='flex items-center gap-2'>
                <p>© Copyright 2021-{date} petcoin.love</p>
                <FavoriteIcon className='text-red-500' fontSize='small' />
            </div>
            <div className='flex gap-2'>
                <div className='bg-blue-600 rounded-full w-9 h-9 flex items-center justify-center'>
                    <i class="fa-brands fa-facebook-f fa-2x"></i>            
                </div>
                <div className='bg-blue-400 rounded-full w-9 h-9 flex items-center justify-center'>
                    <i class="fa-brands fa-twitter fa-2x"></i>            
                </div>
                <div className='rounded-full bg-rose-600 w-9 h-9 flex items-center justify-center'>
                    <i class="fa-brands fa-instagram fa-2x"></i>
                </div>
                <div className='bg-blue-500 rounded-full w-9 h-9 flex items-center justify-center'>
                    <i class="fa-brands fa-discord fa-2x"></i>
                </div>
                <div className=' text-blue-400 bg-white rounded-full  w-9 h-9 flex items-center justify-center '>
                    <i class="fa-brands fa-telegram fa-2x"></i>
                </div>
            </div>
        </div>

        
    </div>
  )
}

export default Footer


