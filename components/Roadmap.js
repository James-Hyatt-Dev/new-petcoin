import Q32021 from '../components/Q32021'
import Q42021 from '../components/Q42021'
import Q12022 from '../components/Q12022'
import Q22022 from '../components/Q22022'
import Q32022 from '../components/Q32022'
import Q42022 from '../components/Q42022'

function Roadmap() {
  return (
    <div className='bg-gray-800 pb-20'>
        <div className="flex flex-col text-center font-semibold text-2xl pt-8 gap-2 lg:text-3xl">
            <h2>Roadmap</h2>
            <p className="text-xs lg:text-base">Our Proposed Roadmap. So much to look forward to!</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            <Q32021 />
            <Q42021 />
            <Q12022 />
            <Q22022 />
            <Q32022 />
            <Q42022 />
        </div>
    </div>
  )
}

export default Roadmap