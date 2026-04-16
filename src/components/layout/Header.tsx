import CitySearch from "@/components/weather/CitySearch";
import type { SearchResult } from "@/types/weather";

interface HeaderProps {
  onSearch: (_result: SearchResult) => void;
}

function Header({ onSearch }: HeaderProps) {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between gap-8 py-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-sky-500 rounded-xl flex items-center justify-center shadow-lg shadow-sky-200">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
            />
          </svg>
        </div>
        <a href="/" className="hover:opacity-80 transition-opacity">
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">
            Weather<span className="text-sky-500">Dash</span>
          </h1>
        </a>
      </div>
      <div className="w-full md:max-w-xs">
        <CitySearch onSearch={onSearch} />
      </div>
    </header>
  );
}

export default Header;
