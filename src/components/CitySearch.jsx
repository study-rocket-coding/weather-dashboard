import { useState, useEffect } from "react";

function CitySearch({ onSearch }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState(""); // 存放錯誤訊息
  const [showHint, setShowHint] = useState(false); // 控制提示顯示

  useEffect(() => {
    const timer = setTimeout(async () => {
      // 輸入少於 2 個字時，清空結果和錯誤訊息，不打 API
      if (query.length < 2) {
        setResults([]);
        setError("");
        return;
      }

      const res = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${query}&count=5&language=en`,
      );
      const data = await res.json();

      // Geocoding API 找不到城市時，results 欄位不存在
      if (!data.results) {
        setResults([]);
        setError("City not found"); // 顯示錯誤訊息
        return;
      }

      // 有結果時，清空錯誤訊息並更新結果
      setError("");
      setResults(data.results);
    }, 300); // 停止輸入 300ms 後才打 API，避免每打一個字就打一次

    // cleanup：每次 query 改變時取消上一個還沒執行的 timer
    return () => clearTimeout(timer);
  }, [query]);

  function handleSelect(result) {
    // 把選到的城市資訊往上傳給 WeatherDashboard
    onSearch({
      lat: result.latitude,
      lon: result.longitude,
      name: result.name,
      country: result.country,
    });
    setResults([]); // 選完後清空下拉選單
    setError(""); // 選完後清空錯誤訊息
    setShowHint(false); // 選完後隱藏提示
    setQuery(result.name); // 把選到的城市名稱填回搜尋框
  }

  return (
    <div className="relative group/search">
      <div className="relative w-full group">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center pointer-events-none transition-colors group-focus-within:text-sky-500 text-slate-400">
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <input
          type="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setError(""); // 輸入改變時清空錯誤訊息
          }}
          onFocus={() => {
            setShowHint(true);
            setError(""); // 重新獲得焦點時清空錯誤訊息
          }}
          // 使用 setTimeout 延遲 onBlur，避免點擊結果前選單就消失
          onBlur={() => setTimeout(() => setShowHint(false), 200)}
          placeholder="Search city..."
          className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-2xl shadow-sm transition-all focus:outline-none focus:ring-4 focus:ring-sky-500/10 focus:border-sky-500 placeholder:text-slate-400 font-medium"
        />
      </div>

      {/* 有焦點且輸入少於 2 個字時顯示提示 */}
      {showHint && query.length > 0 && query.length < 2 && (
        <div className="absolute top-full left-0 right-0 mt-2 p-3 bg-white border border-slate-100 rounded-xl shadow-xl z-20 animate-in fade-in slide-in-from-top-2">
          <p className="text-base font-bold text-slate-400">
            Enter at least 2 characters
          </p>
        </div>
      )}

      {/* 錯誤訊息和下拉選單互斥，不會同時出現 */}
      {error && (
        <div className="absolute top-full left-0 right-0 mt-2 p-3 bg-red-50 border border-red-100 rounded-xl shadow-xl z-20 animate-in fade-in slide-in-from-top-2">
          <p className="text-base text-red-600 font-bold">{error}</p>
        </div>
      )}

      {results.length > 0 && (
        <ul className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-100 rounded-2xl shadow-2xl z-30 overflow-hidden divide-y divide-slate-50 animate-in fade-in slide-in-from-top-2">
          {results.map((result) => (
            <li
              key={result.id}
              onClick={() => handleSelect(result)}
              className="px-5 py-4 hover:bg-slate-50 cursor-pointer transition-colors flex flex-col gap-0.5"
            >
              <span className="text-lg font-bold text-slate-700">
                {result.name}
              </span>
              <span className="text-base text-slate-400 font-medium">
                {result.country} {result.admin1 ? `· ${result.admin1}` : ""}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CitySearch;
