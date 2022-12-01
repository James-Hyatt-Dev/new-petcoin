import Header from './Header'

function Hero() {
  return (
    <div id="heroWrapper" className='object-cover' >
      <Header />
      <div className=" flex flex-col items-center justify-center my-auto  bg-black bg-opacity-50 w-11/12 mx-auto rounded-xl sm:mt-48 md:max-w-3xl pb-10">
        <h1 className='text-3xl pt-4 text-white font-bold text-center sm:text-4xl lg:text-5xl 2xl:text-6xl'>Crypto with a cause</h1>
        <h2 className='pb-4 text-lg lg:text-2xl italic pt-2 2xl:text-3xl'>Saving the lives of dogs and cats</h2>

        <iframe
          className='rounded-2xl '
          src="https://teams.bogged.finance/embeds/chart?address=0xEac475739D6473e656A1440AdA7C675837576603&chain=bsc&charttype=candles&theme=bg:1E2735FF|bg2:2B3648FF|primary:018CF0FF|secondary:1BC870FF|text:F3F6FBFF|text2:F3F6FBFF|candlesUp:1BC870FF|candlesDown:f97316FF|chartLine:018CF0FF&defaultinterval=1m&showchartbutton=true"
          height="350px"
          width="90%"
        >
        </iframe>  
      </div>
    </div>
  )
}

export default Hero