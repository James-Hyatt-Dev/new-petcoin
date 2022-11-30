import DoneOutlineIcon from '@mui/icons-material/DoneOutline';

function Q42021() {
  return (
    <div className="bg-gray-800 w-full h-auto grid grid-cols-1 pt-20">

        <div className="bg-gray-200 rounded-xl h-auto mx-6 pb-3 relative">
            <div className="bg-gradient-to-br from-orange-300 via-orange-600 to-orange-600 rounded-lg w-20 h-14 absolute -top-7 left-5 flex items-center justify-center">
                Q4 2021
            </div>

            <div className="flex flex-col gap-2 px-5 mx-auto">
                <div className="pt-10 flex items-center text-gray-800">
                    <DoneOutlineIcon className='bg-gradient-to-br from-green-400 to-green-600 p-1 rounded text-white' />
                    <p className="text-xs pl-2">Build Development Team</p>
                </div>
                <div className="flex items-center text-gray-800">
                    <DoneOutlineIcon className='bg-gradient-to-br from-green-400 to-green-600 p-1 rounded text-white' />
                    <p className="text-xs pl-2">Build first three websites</p>
                </div>
                <div className="flex items-center text-gray-800">
                    <DoneOutlineIcon className='bg-gradient-to-br from-green-400 to-green-600 p-1 rounded text-white' />
                    <p className="text-xs pl-2">Market research with shelters & organizations</p>
                </div>
                <div className="flex items-center text-gray-800">
                    <DoneOutlineIcon className='bg-gradient-to-br from-green-400 to-green-600 p-1 rounded text-white' />
                    <p className="text-xs pl-2">Build Strategy for Utility Structure</p>
                </div>
                <div className="flex items-center text-gray-800">
                    <DoneOutlineIcon className='bg-gradient-to-br from-green-400 to-green-600 p-1 rounded text-white' />
                    <p className="text-xs pl-2">PetCoin To The Rescue incorporated</p>
                </div>
                <div className="flex items-center text-gray-800">
                    <DoneOutlineIcon className='bg-gradient-to-br from-green-400 to-green-600 p-1 rounded text-white' />
                    <p className="text-xs pl-2">Add office space</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Q42021;