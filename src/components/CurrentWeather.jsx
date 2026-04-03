function CurrentWeather({ weather, weatherCode }) {
  return (
    <>
      <section className="flex flex-col gap-6 p-6 md:p-10 border border-sky-900 rounded-3xl">
        <div>
          <h3 className="text-2xl text-sky-900 font-semibold">Current Weather</h3>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col gap-6 min-w-60">
            <div className="p-5">
              <p className="text-6xl font-medium mb-4">{weather?.current?.temperature_2m} °C</p>
              <p className="text-base text-slate-500 font-medium">Feels Like <span className="text-black">{weather?.current?.apparent_temperature} °C</span></p>
            </div>
            <div className="grid grid-cols-2 gap-3 md:gap-4 w-full">
              <div className="flex flex-col gap-2 bg-slate-200 p-4 md:p-5 rounded-xl text-nowrap">
                <p className="text-base md:text-lg text-slate-600 font-medium">Humidity</p>
                <p className="text-lg md:text-2xl font-medium">{weather?.current?.relative_humidity_2m} %</p>
              </div>
              <div className="flex flex-col gap-2 bg-slate-200 p-4 md:p-5 rounded-xl text-nowrap">
                <p className="text-base md:text-lg text-slate-600 font-medium">Wind Speed</p>
                <p className="text-lg md:text-2xl font-medium">{weather?.current?.wind_speed_10m} km/h</p>
              </div>
            </div>
          </div>
          <img src={weatherCode?.image} alt={weatherCode?.description} className="aspect-square w-60 bg-white"/>
        </div>
      </section>
    </>
  )
}

export default CurrentWeather;