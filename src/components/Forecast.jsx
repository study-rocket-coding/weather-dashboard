import { weatherIcons } from "../constants/imagePaths";

function Forecast({ forecasts }) {
  return (
    <>
      <section className="flex flex-col gap-6 py-6 md:py-10 border border-sky-900 rounded-3xl">
        <div className="px-6 md:px-10">
          <h3 className="text-2xl text-sky-900 font-semibold">Forecast</h3>
        </div>
        <div className="flex flex-col gap-6">
          {forecasts.map((day) => {
            const formattedDate = day.date.slice(5).replace('-', '/');
            
            return (
              <div key={day.date} className="flex items-center justify-between px-6 md:px-10 odd:bg-white even:bg-slate-50">
                <p className="text-lg md:text-xl text-slate-600 font-semibold">{formattedDate}</p>
                <img src={day.weatherCode?.image} alt={day.weatherCode?.description} className="aspect-square w-20 md:w-30"/>
                <div className="flex items-end">
                  <p className="text-lg md:text-xl text-slate-600 font-semibold">{day.maxTemp} °C</p>
                  <p className="text-lg md:text-xl text-slate-400 font-semibold px-2">/</p>
                  <p className="text-base md:text-lg text-slate-400 font-semibold">{day.minTemp} °C</p>
                </div>
                <div className="hidden sm:flex items-center">
                  <img src={weatherIcons["umbrella"].src} alt={weatherIcons["umbrella"].alt} className="aspect-square w-10"/>
                  <p className="text-lg md:text-xl text-slate-600 font-semibold">{day.precipitationProbability} %</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Forecast;