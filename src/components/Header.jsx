import CitySearch from "../components/CitySearch";

function Header({ onSearch }) {
  return (
    <header className="flex flex-col items-center gap-6 py-8 min-[576px]:flex-row min-[576px]:justify-between min-[576px]:py-10 md:pl-0">
      <h1 className="text-4xl font-bold text-sky-950 text-center min-[576px]:text-left">
        Weather Dashboard
      </h1>
      <div className="w-full max-w-sm min-[576px]:max-w-60 px-4 min-[576px]:px-0">
        <CitySearch onSearch={onSearch} />
      </div>
    </header>
  )
}

export default Header;