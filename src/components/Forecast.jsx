import { weatherIcons } from "../constants/imagePaths";

function Forecast({ forecasts }) {
  // 若無預報資料則不渲染
  if (!forecasts?.length) return null;

  return (
    <section className="bg-white rounded-4xl shadow-sm ring-1 ring-slate-200/60 overflow-hidden">
      <div className="p-8 pb-4">
        <h3 className="text-base font-bold uppercase tracking-[0.2em] text-sky-600">7-Day Forecast</h3>
      </div>
      
      <div className="divide-y divide-slate-100 px-4 md:px-8 pb-6">
        {/* 
          使用 <ul> (Unordered List) 與 <li> (List Item) 建立語意化列表。
          優點：符合無障礙標準，螢幕閱讀器能告知使用者這是一組列表及項目的總數。
        */}
        <ul className="space-y-0">
          {forecasts.map((day) => {
            // 使用 Date 物件精確處理日期與星期
            const dateObj = new Date(day.date);
            const weekday = dateObj.toLocaleDateString('en-US', { weekday: 'long' });

            // 格式化日期為 MM/DD 形式
            const month = String(dateObj.getMonth() + 1).padStart(2, '0');
            const date = String(dateObj.getDate()).padStart(2, '0');
            const dateLabel = `${month}/${date}`;

            return (
              <li key={day.date} className="flex items-center justify-between py-5 px-4 group hover:bg-slate-50/80 transition-colors rounded-2xl">
                {/* 日期與星期區塊 */}
                {/* 
                  使用 <time> 標籤標註日期。
                  - dateTime 屬性提供機器可讀格式 (YYYY-MM-DD)
                  - 內部文字提供人類閱讀格式
                */}
                <div className="flex flex-col gap-1 w-28">
                  <time dateTime={day.date} className="text-xl font-black text-slate-900 leading-none tabular-nums">
                    {dateLabel}
                  </time>
                  <span className="text-base font-bold text-slate-400">{weekday}</span>
                </div>
                {/* 天氣圖示與描述，大螢幕顯示文字描述 */}
                <div className="flex items-center gap-4 flex-1 justify-center md:justify-start">
                  <img 
                    src={day.weatherCode?.image} 
                    alt={day.weatherCode?.description} 
                    className="w-20 h-20 md:w-24 md:h-24 drop-shadow-md"
                  />
                  <span className="hidden lg:block text-slate-500 font-medium text-lg">{day.weatherCode?.description}</span>
                </div>

                {/* 溫度區塊，375px 以下隱藏以維持排版整潔 */}
                <div className="hidden min-[376px]:flex items-center gap-3 w-28 justify-end tabular-nums">
                  <span className="text-xl font-black text-slate-900">{Math.round(day.maxTemp)}°</span>
                  <div className="h-4 w-px bg-slate-200"></div>
                  <span className="text-lg font-bold text-slate-400">{Math.round(day.minTemp)}°C</span>
                </div>
                
                {/* 降雨機率，576px 以下隱藏 */}
                <div className="hidden min-[576px]:flex items-center gap-1 min-w-24 justify-end">
                  <img src={weatherIcons["umbrella"].src} alt="Precipitation probability" className="w-7 h-7" />
                  <span className="text-lg font-bold text-slate-500 tabular-nums">{day.precipitationProbability}%</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Forecast;