import Image from "next/image";
import PetCoinWhiteFull from '../public/Main/PetCoinWhiteFull.webp';
import { Button } from '@mui/material';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import Link from "next/link";

function Header() {
    return (
        <div id="headerWrapper" className=" flex items-center justify-around my-8  lg:p-4 lg:mx-4 lg:rounded-t-lg xl:mx-20">
            <div id="headerImage" className="w-40">
                <Image src={PetCoinWhiteFull} alt="PetCoin corporate logo shown in white" />
            </div>
            <div className="">
                <div id="nav" className="bg-orange-600 rounded-full p-2 fixed bottom-4 right-4 w-[60px] h-[60px] sm:top-8 lg:hidden border mr-3">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="h-11 w-11" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M256 224c-79.41 0-192 122.76-192 200.25 0 34.9 26.81 55.75 71.74 55.75 48.84 0 81.09-25.08 120.26-25.08 39.51 0 71.85 25.08 120.26 25.08 44.93 0 71.74-20.85 71.74-55.75C448 346.76 335.41 224 256 224zm-147.28-12.61c-10.4-34.65-42.44-57.09-71.56-50.13-29.12 6.96-44.29 40.69-33.89 75.34 10.4 34.65 42.44 57.09 71.56 50.13 29.12-6.96 44.29-40.69 33.89-75.34zm84.72-20.78c30.94-8.14 46.42-49.94 34.58-93.36s-46.52-72.01-77.46-63.87-46.42 49.94-34.58 93.36c11.84 43.42 46.53 72.02 77.46 63.87zm281.39-29.34c-29.12-6.96-61.15 15.48-71.56 50.13-10.4 34.65 4.77 68.38 33.89 75.34 29.12 6.96 61.15-15.48 71.56-50.13 10.4-34.65-4.77-68.38-33.89-75.34zm-156.27 29.34c30.94 8.14 65.62-20.45 77.46-63.87 11.84-43.42-3.64-85.21-34.58-93.36s-65.62 20.45-77.46 63.87c-11.84 43.42 3.64 85.22 34.58 93.36z">
                        </path>
                    </svg>
                </div>
                <div className="lg:hidden">
                    <div className="bg-gradient-to-r from-orange-700 to-orange-600 rounded-full p-2 fixed bottom-4 left-4 w-12 flex items-center justify-center h-12 border">
                        <a href="tel:18004888421"><PhoneIphoneIcon /></a>
                    </div>
                    <div className="bg-gradient-to-r from-orange-700 to-orange-600 rounded-full p-2 fixed bottom-4 left-20 w-12 flex items-center justify-center h-12 border">
                        <a href="mailto:info@petcoin.com"><EmailIcon /></a>
                    </div>
                </div>
            </div>

            <div id="navButtons" className="flex flex-col ">
                <div className=" hidden lg:flex text-white font-semibold uppercase text-sm gap-4 mr-10 pb-2">
                    <Link href='https://www.petcoin.love/about'>About</Link>
                    <Link href='https://www.petcoin.love/whitepaper'>WhitePaper</Link>
                    <Link href='https://www.petcoin.love/audit'>Audit</Link>
                    <Link href='https://www.petrescue.love'>PetRescue</Link>
                    <Link href='https://www.petstore.love'>PetStore</Link>
                    <Link href='https://www.petcoin.love/faq'>FAQ</Link>
                </div>
                <div className="space-y-2 sm:pr-20 sm:flex-row sm:gap-2 sm:space-y-0 flex flex-col pt-5 pr-4">
                    <div className="bg-orange-600">
                        <Button href='https://www.petcoin.love/login' className="text-white px-8">Sign In</Button>
                    </div>
                    <div className="bg-orange-600">
                        <Button href='https://www.petcoin.love/signup' className="text-white px-8">Sign Up</Button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header