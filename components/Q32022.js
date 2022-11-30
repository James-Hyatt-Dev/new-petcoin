import DoneOutlineIcon from '@mui/icons-material/DoneOutline';

function Q32022() {
  return (
    <div className="bg-gray-800 w-full h-auto grid grid-cols-1 pt-20">

        <div className="bg-gray-200 rounded-xl h-auto mx-6 pb-3 relative">
            <div className="bg-gradient-to-br from-orange-300 via-orange-600 to-orange-600 rounded-lg w-20 h-14 absolute -top-7 left-5 flex items-center justify-center">
                Q3 2022
            </div>

            <div className="flex flex-col gap-2 px-5 mx-auto">
                <div className="pt-10 flex items-center text-gray-800">
                    <DoneOutlineIcon className='bg-gradient-to-br from-green-400 to-green-600 p-1 rounded text-white' />
                    <p className="text-xs pl-2"><a className='text-blue-600 underline' href="https://petstore.love" target='none'>PetStore.love</a> store deployed</p>
                </div>
                <div className="flex items-center text-gray-800">
                    <DoneOutlineIcon className='bg-gradient-to-br from-green-400 to-green-600 p-1 rounded text-white' />
                    <p className="text-xs pl-2"><a className='text-blue-600 underline' href="https://petrescue.love" target='none'>PetRescue.love</a> site deployed</p>
                </div>
                <div className="flex items-center text-gray-800">
                    <DoneOutlineIcon className='bg-gradient-to-br from-green-400 to-green-600 p-1 rounded text-white' />
                    <p className="text-xs pl-2">API connectivity to all sites</p>
                </div>
                <div className="flex items-center text-gray-800">
                    <DoneOutlineIcon className='bg-gradient-to-br from-green-400 to-green-600 p-1 rounded text-white' />
                    <p className="text-xs pl-2">Gnosis Safe Management deployed</p>
                </div>
                <div className="flex items-center text-gray-800">
                    <DoneOutlineIcon className='bg-gradient-to-br from-green-400 to-green-600 p-1 rounded text-white' />
                    <p className="text-xs pl-2">Cross chain abilities developed</p>
                </div>
                <div className="flex items-center text-gray-800">
                    <DoneOutlineIcon className='bg-gradient-to-br from-green-400 to-green-600 p-1 rounded text-white' />
                    <p className="text-xs pl-2">Payment gateway developed</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Q32022