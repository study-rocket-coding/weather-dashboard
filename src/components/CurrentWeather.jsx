function CurrentWeather({ weather, weatherCode }) {
  // 若無天氣資料則不渲染
  if (!weather) return null;

  return (
    <section className="bg-white p-8 md:p-12 rounded-4xl shadow-sm ring-1 ring-slate-200/60 overflow-hidden space-y-8">
      <h3 className="text-base font-bold uppercase tracking-[0.2em] text-sky-600">Current Weather</h3>

      {/* 使用 flex-col-reverse 讓圖示在手機版時優先排到上方 */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <div className="flex-1 w-full space-y-8">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-7xl md:text-8xl font-black text-slate-900 tracking-tighter tabular-nums">
                {Math.round(weather.current.temperature_2m)}°
              </span>
              <span className="text-3xl font-bold text-slate-400">C</span>
            </div>
            <p className="text-lg text-slate-500 font-medium mt-2">
              Feels like <span className="text-slate-900 font-bold">{Math.round(weather.current.apparent_temperature)}°C</span>
            </p>
          </div>

          {/* 濕度與風速，425px 以下改為垂直堆疊以維持易讀性 */}
          {/* 
            使用 <dl> (Description List) 建立語意化的數據列表。
            - <dt> (Description Term) 定義項目名稱（如：Humidity）
            - <dd> (Description Details) 定義對應的數值
            優點：
            1. 語意化結構：適合描述屬性與數值的關係（key-value）
            2. 無障礙支援：螢幕閱讀器會將 <dt> 與 <dd> 視為一組關聯資料
            3. 結構清晰：有助於機器與開發者理解內容語意
          */}
          <dl className="grid grid-cols-1 min-[425px]:grid-cols-2 gap-4">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 flex flex-col gap-1">
              <dt className="text-base font-bold text-slate-400">Humidity</dt>
              <dd className="text-2xl font-bold text-slate-800 tabular-nums">{weather.current.relative_humidity_2m}%</dd>
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 flex flex-col gap-1">
              <dt className="text-base font-bold text-slate-400">Wind Speed</dt>
              <dd className="text-2xl font-bold text-slate-800 tabular-nums">
                {weather.current.wind_speed_10m} <small className="text-base font-normal text-slate-500">km/h</small>
              </dd>
            </div>
          </dl>
        </div>

        <div className="relative group">
          {/* 使用較大範圍的模糊光暈作為視覺緩衝 */}
          <div className="absolute -inset-4 bg-sky-50 rounded-full scale-75 group-hover:scale-100 transition-transform duration-700 blur-3xl opacity-40 -z-10"></div>
          
          {/* translate-z-0 backface-hidden：將圖示移至獨立 GPU 層，防止動畫影響周圍元素的渲染 */}
          <img 
            src={weatherCode?.image} 
            alt={weatherCode?.description} 
            className="w-48 md:w-64 aspect-square drop-shadow-xl animate-in fade-in duration-500 bg-transparent will-change-transform block translate-z-0 backface-hidden"
          />
          
          <p className="text-center mt-4 text-xl font-bold text-slate-700">{weatherCode?.description}</p>
        </div>
      </div>
    </section>
  );
}
export default CurrentWeather;