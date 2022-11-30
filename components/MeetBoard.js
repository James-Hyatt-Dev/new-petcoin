import Image from 'next/image'
import Link from 'next/link'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import BenChancey from '../public/MeetBoard/BenChancey.webp'
import JohnGoede from '../public/MeetBoard/JohnGoede.webp'
import RickHendrix from '../public/MeetBoard/RickHendrix.webp'
import JeffKafka from '../public/MeetBoard/JeffKafka.webp'
import StuRedsun from '../public/MeetBoard/StuRedsun.webp'
import AnthonyReeves from '../public/MeetBoard/AnthonyReeves.webp'
import JamesRigney from '../public/MeetBoard/JamesRigney.webp'
import TonyWyllie from '../public/MeetBoard/TonyWyllie.webp'

function MeetBoard() {
  return (
    <div id="meetTeam" className='bg-gray-200 w-screen pb-8 pt-4 text-gray-800 flex flex-col items-center'>
        <div className="text-center py-4">
            <h2 className='font-semibold text-2xl lg:text-3xl'>Meet Our Board of Directors</h2>
            <p className='text-xs lg:text-base'>Our Board's Mission is to help animals. Come Join Us!</p>
        </div>
        <div className="sm:grid-cols-2 sm:grid lg:grid-cols-3">
        {/* john allison */}
            <div className="w-full flex items-center sm:flex-col">
                <div className="w-2/3 pl-4 py-4 z-0 sm:w-full sm:justify-center sm:flex">
                    <div className="w-[200px] h-[200px] relative lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px]">
                        <div className="py-4 ">
                            <Image className='rounded-xl object-top' src={BenChancey} alt='co founder john allison image' layout='fill' objectFit='cover' />
                        </div>
                    </div>
                </div>
                <div className="w-1/3  text-right pr-4 sm:w-full sm:text-center sm:pr-0">
                    <p className='font-semibold'>Ben Chancey</p>
                    <p className="italic text-xs">host, chewonthis.tv</p>
                    <Link href='https://www.linkedin.com/in/jallisonfl/'><LinkedInIcon className='text-blue-400' fontSize='large' /></Link>
                </div>
            </div>

            {/* rich hudec */}
            <div className="w-full flex items-center sm:flex-col">
                <div className="w-2/3 pl-4 py-4 z-0 sm:w-full sm:justify-center sm:flex">
                    <div className="w-[200px] h-[200px] relative lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] ">
                        <div className="py-4 ">
                            <Image className='rounded-xl object-top' src={RickHendrix} alt='co founder john allison image' layout='fill' objectFit='cover' />
                        </div>
                    </div>
                </div>
                <div className="w-1/3  text-right pr-4 sm:w-full sm:text-center sm:pr-0">
                    <p className='font-semibold'>Rick Hendrix</p>
                    <p className="italic text-xs">CEO, Rick Hendrix Energy</p>
                    <Link href='https://www.linkedin.com/in/rich-hudec-439586223/'><LinkedInIcon className='text-blue-400' fontSize='large' /></Link>
                </div>
            </div>
       
        {/* lisa hudec */}
            <div className="w-full flex items-center sm:flex-col">
                <div className="w-2/3 pl-4 py-4 z-0 sm:w-full sm:justify-center sm:flex">
                    <div className="w-[200px] h-[200px] relative lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] ">
                        <div className="py-4 ">
                            <Image className='rounded-xl object-top' src={JeffKafka} alt='co founder john allison image' layout='fill' objectFit='cover' />
                        </div>
                    </div>
                </div>
                <div className="w-1/3  text-right pr-4 sm:w-full sm:text-center sm:pr-0">
                    <p className='font-semibold'>Jeff Kafka</p>
                    <p className="italic text-xs">Senior VP, Grapheene</p>
                    <Link href='https://www.linkedin.com/in/lisa-hudec-1245161a8/'><LinkedInIcon className='text-blue-400' fontSize='large' /></Link>
                </div>
            </div>
            {/* vito roppo */}
            <div className="w-full flex items-center sm:flex-col">
                <div className="w-2/3 pl-4 py-4 z-0 sm:w-full sm:justify-center sm:flex">
                    <div className="w-[200px] h-[200px] relative lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] ">
                        <div className="py-4 ">
                            <Image className='rounded-xl object-top' src={StuRedsun} alt='co founder john allison image' layout='fill' objectFit='cover' />
                        </div>
                    </div>
                </div>
                <div className="w-1/3  text-right pr-4 sm:w-full sm:text-center sm:pr-0">
                    <p className='font-semibold'>Stu Redsun</p>
                    <p className="italic text-xs">CMO, Waste Management</p>
                    <Link href='https://www.linkedin.com/in/vito-roppo-718824248/'><LinkedInIcon className='text-blue-400' fontSize='large' /></Link>
                </div>
            </div>
        
        {/* justin henderson */}
            <div className="w-full flex items-center sm:flex-col">
                <div className="w-2/3 pl-4 py-4 z-0 sm:w-full sm:justify-center sm:flex">
                    <div className="w-[200px] h-[200px] relative lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] ">
                        <div className="py-4 ">
                            <Image className='rounded-xl object-top' src={AnthonyReeves} alt='co founder john allison image' layout='fill' objectFit='cover' />
                        </div>
                    </div>
                </div>
                <div className="w-1/3  text-right pr-4 sm:w-full sm:text-center sm:pr-0">
                    <p className='font-semibold'>Anthony Reeves</p>
                    <p className="italic text-xs">President, Global Partner - Essence</p>
                    <Link href='https://www.linkedin.com/in/justin-henderson-11a877248/'><LinkedInIcon className='text-blue-400' fontSize='large' /></Link>
                </div>
            </div>
            {/* davin young */}
            <div className="w-full flex items-center sm:flex-col">
                <div className="w-2/3 pl-4 py-4 z-0 sm:w-full sm:justify-center sm:flex">
                    <div className="w-[200px] h-[200px] relative lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] ">
                        <div className="py-4 ">
                            <Image className='rounded-xl object-top' src={JamesRigney} alt='co founder john allison image' layout='fill' objectFit='cover' />
                        </div>
                    </div>
                </div>
                <div className="w-1/3  text-right pr-4 sm:w-full sm:text-center sm:pr-0">
                    <p className='font-semibold'>James Rigney</p>
                    <p className="italic text-xs">Senior VP, Labelium</p>
                    <Link href='https://www.linkedin.com/in/davin-young-9463841a7/'><LinkedInIcon className='text-blue-400' fontSize='large' /></Link>
                </div>
            </div>

            <div className="w-full flex items-center sm:flex-col">
                <div className="w-2/3 pl-4 py-4 z-0 sm:w-full sm:justify-center sm:flex">
                    <div className="w-[200px] h-[200px] relative lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] ">
                        <div className="py-4 ">
                            <Image className='rounded-xl object-top' src={JohnGoede} alt='co founder john allison image' layout='fill' objectFit='cover' />
                        </div>
                    </div>
                </div>
                <div className="w-1/3  text-right pr-4 sm:w-full sm:text-center sm:pr-0">
                    <p className='font-semibold'>John Goede</p>
                    <p className="italic text-xs">Goede, DeBoest, and Cross</p>
                    <Link href='https://www.linkedin.com/in/justin-henderson-11a877248/'><LinkedInIcon className='text-blue-400' fontSize='large' /></Link>
                </div>
            </div>
            {/* davin young */}
            <div className="w-full flex items-center sm:flex-col">
                <div className="w-2/3 pl-4 py-4 z-0 sm:w-full sm:justify-center sm:flex">
                    <div className="w-[200px] h-[200px] relative lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] ">
                        <div className="py-4 ">
                            <Image className='rounded-xl object-top' src={TonyWyllie} alt='co founder john allison image' layout='fill' objectFit='cover' />
                        </div>
                    </div>
                </div>
                <div className="w-1/3  text-right pr-4 sm:w-full sm:text-center sm:pr-0">
                    <p className='font-semibold'>Tony Wyllie</p>
                    <p className="italic text-xs">CEO, The Collective Engine</p>
                    <Link href='https://www.linkedin.com/in/davin-young-9463841a7/'><LinkedInIcon className='text-blue-400' fontSize='large' /></Link>
                </div>
            </div>
        </div>

    </div>
  )
}

export default MeetBoard