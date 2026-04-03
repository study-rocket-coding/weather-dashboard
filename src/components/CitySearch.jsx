import { useState, useEffect } from "react";

function CitySearch({ onSearch }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState(''); // 存放錯誤訊息

  useEffect(() => {
    const timer = setTimeout(async () => {
      // 輸入少於 2 個字時，清空結果和錯誤訊息，不打 API
      if (query.length < 2) {
        setResults([]);
        setError('');
        return;
      }

      const res = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${query}&count=5&language=en`
      );
      const data = await res.json();

      // Geocoding API 找不到城市時，results 欄位不存在
      if (!data.results) {
        setResults([]);
        setError('City not found'); // 顯示錯誤訊息
        return;
      }

      // 有結果時，清空錯誤訊息並更新結果
      setError('');
      setResults(data.results);
    }, 300); // 停止輸入 300ms 後才打 API，避免每打一個字就打一次

    // cleanup：每次 query 改變時取消上一個還沒執行的 timer
    return () => clearTimeout(timer);
  }, [query])

  function handleSelect(result) {
    // 把選到的城市資訊往上傳給 WeatherDashboard
    onSearch({
      lat: result.latitude,
      lon: result.longitude,
      name: result.name,
      country: result.country,
    });
    setResults([]); // 選完後清空下拉選單
    setError('');   // 選完後清空錯誤訊息
    setQuery(result.name); // 把選到的城市名稱填回搜尋框
  }

  return (
    <div className="relative">
      <div className="relative w-full md:max-w-sm group">
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none group-focus-within:text-sky-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>

        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search city"
          className="w-full pl-11 pr-4 py-3 border border-sky-800 rounded-full hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-700"
        />
      </div>

      {/* 錯誤訊息和下拉選單互斥，不會同時出現 */}
      {error && (
        <p className="absolute top-full pl-11 mt-2 text-sm text-red-700 font-semibold px-2">{error}</p>
      )}

      {results.length > 0 && (
        <ul className="absolute top-full mt-2 w-full bg-white border border-sky-800 rounded-xl shadow-lg z-10">
          {results.map((result) => (
            <li
              key={result.id}
              onClick={() => handleSelect(result)}
              className="px-4 py-2 hover:underline hover:underline-offset-2 cursor-pointer"
            >
              {result.name}, {result.country}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default CitySearch;