import Image from 'next/image'
import Link from 'next/link'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import JohnAllison from '../public/MeetTeam/JohnAllison.webp'
import RichHudec from '../public/MeetTeam/RichHudec.webp'
import LisaHudec from '../public/MeetTeam/LisaHudec.webp'
import DavinYoung from '../public/MeetTeam/DavinYoung.webp'
import JustinHenderson from '../public/MeetTeam/JustinHenderson.webp'
import VitoRoppo from '../public/MeetTeam/VitoRoppo.webp'

function MeetTeam() {
  return (
    <div id="meetTeam" className='bg-gray-800 w-screen pb-8 pt-4 flex flex-col items-center'>
        <div className="text-center py-4">
            <h2 className='font-semibold text-2xl lg:text-3xl'>Meet Our Team</h2>
            <p className='text-xs lg:text-base'>Our Team's Mission is to help animals. Come Join Us!</p>
        </div>
        <div className="sm:grid-cols-2 sm:grid lg:grid-cols-3">
        {/* john allison */}
            <div className="w-full flex items-center sm:flex-col">
                <div className="w-2/3 pl-4 py-4 z-0 sm:w-full sm:justify-center sm:flex">
                    <div className="w-[200px] h-[200px] relative lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px]">
                        <div className="py-4 ">
                            <Image className='rounded-xl object-top' src={JohnAllison} alt='co founder john allison image' layout='fill' objectFit='cover' />
                        </div>
                    </div>
                </div>
                <div className="w-1/3  text-right pr-4 sm:w-full sm:text-center sm:pr-0">
                    <p className='font-semibold'>John Allison</p>
                    <p className="italic text-xs">founder</p>
                    <Link href='https://www.linkedin.com/in/jallisonfl/'><LinkedInIcon className='text-blue-400' fontSize='large' /></Link>
                </div>
            </div>

            {/* rich hudec */}
            <div className="w-full flex items-center sm:flex-col">
                <div className="w-2/3 pl-4 py-4 z-0 sm:w-full sm:justify-center sm:flex">
                    <div className="w-[200px] h-[200px] relative lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] ">
                        <div className="py-4 ">
                            <Image className='rounded-xl object-top' src={RichHudec} alt='co founder john allison image' layout='fill' objectFit='cover' />
                        </div>
                    </div>
                </div>
                <div className="w-1/3  text-right pr-4 sm:w-full sm:text-center sm:pr-0">
                    <p className='font-semibold'>Rich Hudec</p>
                    <p className="italic text-xs">founder</p>
                    <Link href='https://www.linkedin.com/in/rich-hudec-439586223/'><LinkedInIcon className='text-blue-400' fontSize='large' /></Link>
                </div>
            </div>
       
        {/* lisa hudec */}
            <div className="w-full flex items-center sm:flex-col">
                <div className="w-2/3 pl-4 py-4 z-0 sm:w-full sm:justify-center sm:flex">
                    <div className="w-[200px] h-[200px] relative lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] ">
                        <div className="py-4 ">
                            <Image className='rounded-xl object-top' src={LisaHudec} alt='co founder john allison image' layout='fill' objectFit='cover' />
                        </div>
                    </div>
                </div>
                <div className="w-1/3  text-right pr-4 sm:w-full sm:text-center sm:pr-0">
                    <p className='font-semibold'>Lisa Hudec</p>
                    <p className="italic text-xs">founder</p>
                    <Link href='https://www.linkedin.com/in/lisa-hudec-1245161a8/'><LinkedInIcon className='text-blue-400' fontSize='large' /></Link>
                </div>
            </div>
            {/* vito roppo */}
            <div className="w-full flex items-center sm:flex-col">
                <div className="w-2/3 pl-4 py-4 z-0 sm:w-full sm:justify-center sm:flex">
                    <div className="w-[200px] h-[200px] relative lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] ">
                        <div className="py-4 ">
                            <Image className='rounded-xl object-top' src={VitoRoppo} alt='co founder john allison image' layout='fill' objectFit='cover' />
                        </div>
                    </div>
                </div>
                <div className="w-1/3  text-right pr-4 sm:w-full sm:text-center sm:pr-0">
                    <p className='font-semibold'>Vito Roppo</p>
                    <p className="italic text-xs">general counsel</p>
                    <Link href='https://www.linkedin.com/in/vito-roppo-718824248/'><LinkedInIcon className='text-blue-400' fontSize='large' /></Link>
                </div>
            </div>
        
        {/* justin henderson */}
            <div className="w-full flex items-center sm:flex-col">
                <div className="w-2/3 pl-4 py-4 z-0 sm:w-full sm:justify-center sm:flex">
                    <div className="w-[200px] h-[200px] relative lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] ">
                        <div className="py-4 ">
                            <Image className='rounded-xl object-top' src={JustinHenderson} alt='co founder john allison image' layout='fill' objectFit='cover' />
                        </div>
                    </div>
                </div>
                <div className="w-1/3  text-right pr-4 sm:w-full sm:text-center sm:pr-0">
                    <p className='font-semibold'>Justin Henderson</p>
                    <p className="italic text-xs">chief financial officer</p>
                    <Link href='https://www.linkedin.com/in/justin-henderson-11a877248/'><LinkedInIcon className='text-blue-400' fontSize='large' /></Link>
                </div>
            </div>
            {/* davin young */}
            <div className="w-full flex items-center sm:flex-col">
                <div className="w-2/3 pl-4 py-4 z-0 sm:w-full sm:justify-center sm:flex">
                    <div className="w-[200px] h-[200px] relative lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] ">
                        <div className="py-4 ">
                            <Image className='rounded-xl object-top' src={DavinYoung} alt='co founder john allison image' layout='fill' objectFit='cover' />
                        </div>
                    </div>
                </div>
                <div className="w-1/3  text-right pr-4 sm:w-full sm:text-center sm:pr-0">
                    <p className='font-semibold'>Davin Young</p>
                    <p className="italic text-xs">senior developer</p>
                    <Link href='https://www.linkedin.com/in/davin-young-9463841a7/'><LinkedInIcon className='text-blue-400' fontSize='large' /></Link>
                </div>
            </div>
        </div>

    </div>
  )
}

export default MeetTeam