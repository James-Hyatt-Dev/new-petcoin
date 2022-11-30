import Link from 'next/link'

function GetStartedCTA() {
  return (
    <div className="text-center bg-orange-500 flex flex-col gap-2 py-4 md:flex-row  md:justify-center md:items-center md:space-x-20">
        <div className="">
            <h2 className="text-2xl lg:text-3xl font-semibold">Ready to Get Stared?</h2>
        </div>
        <div className=" flex">
            <div className="bg-white text-orange-600 font-semibold max-w-1/3 rounded-lg flex justify-center mx-auto py-2 px-4 uppercase">
                <Link href='https://www.petcoin.love/signup'>Create Your Account</Link>
            </div>
        </div>
    </div>
  )
}

export default GetStartedCTA