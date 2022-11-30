import Header from './Header'

function Hero() {
  return (
    <div id="heroWrapper" className='object-cover' >
      <Header />
      <div className=" flex flex-col items-center justify-center my-auto  bg-black bg-opacity-30 w-11/12 mx-auto rounded-xl sm:mt-48 md:max-w-3xl">
        <h1 className='text-3xl text-orange-600 font-bold'>Crypto with a cause</h1>
        <h2 className='text-'>Saving the lives of dogs and cats</h2>

        <iframe
          className='p-2 rounded-xl overflow-hidden sm:flex md:px-10 '
          src="https://teams.bogged.finance/embeds/chart?address=0xEac475739D6473e656A1440AdA7C675837576603&chain=bsc&charttype=candles&theme=bg:1E2735FF|bg2:2B3648FF|primary:018CF0FF|secondary:1BC870FF|text:F3F6FBFF|text2:F3F6FBFF|candlesUp:1BC870FF|candlesDown:f97316FF|chartLine:018CF0FF&defaultinterval=1m&showchartbutton=true"
          height="350px"
          width="100%"
        >
        </iframe>  
      </div>
    </div>
  )
}

export default Hero