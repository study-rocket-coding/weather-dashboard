function ForecastSkeleton() {
  const skeletonItems = ['day-1', 'day-2', 'day-3', 'day-4', 'day-5', 'day-6', 'day-7'];

  return (
    <section className="bg-white rounded-4xl shadow-sm ring-1 ring-slate-200/60 overflow-hidden">
      <div className="p-8 pb-4">
        <div className="h-6 w-40 shimmer-base animate-shimmer rounded-full"></div>
      </div>
      <div className="divide-y divide-slate-100 px-4 md:px-8 pb-6">
        <ul className="space-y-0">
          {skeletonItems.map((itemKey) => (
            <li key={itemKey} className="flex items-center justify-between py-5 px-4">
              <div className="flex flex-col gap-1 w-28">
                <div className="h-7 w-16 shimmer-base animate-shimmer rounded-lg"></div>
                <div className="h-5 w-20 shimmer-secondary animate-shimmer rounded-lg"></div>
              </div>
              <div className="flex items-center gap-4 flex-1 justify-center md:justify-start">
                <div className="w-20 h-20 md:w-24 md:h-24 shimmer-base animate-shimmer rounded-full"></div>
                <div className="hidden lg:block h-6 w-24 shimmer-secondary animate-shimmer rounded-lg"></div>
              </div>

              <div className="hidden min-[376px]:flex items-center gap-3 w-28 justify-end">
                <div className="h-7 w-10 shimmer-base animate-shimmer rounded-lg"></div>
                <div className="h-4 w-px bg-slate-200"></div>
                <div className="h-6 w-12 shimmer-secondary animate-shimmer rounded-lg"></div>
              </div>

              <div className="hidden min-[576px]:flex items-center gap-1 min-w-24 justify-end">
                <div className="w-7 h-7 shimmer-base animate-shimmer rounded-full"></div>
                <div className="h-6 w-10 shimmer-secondary animate-shimmer rounded-lg"></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ForecastSkeleton;