function CurrentWeatherSkeleton() {
  return (
    <section className="bg-white p-8 md:p-12 rounded-4xl shadow-sm ring-1 ring-slate-200/60 overflow-hidden space-y-8 animate-pulse">
      <div className="h-6 w-32 bg-slate-50 rounded-full"></div>
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <div className="flex-1 w-full space-y-8">
          <div className="space-y-4">
            <div className="h-20 w-48 bg-slate-50 rounded-2xl"></div>
            <div className="h-6 w-32 bg-slate-50 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 min-[425px]:grid-cols-2 gap-4">
            <div className="h-24 bg-slate-50/50 rounded-2xl border border-slate-100/50"></div>
            <div className="h-24 bg-slate-50/50 rounded-2xl border border-slate-100/50"></div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-48 md:w-64 aspect-square bg-slate-50 rounded-full"></div>
          <div className="h-6 w-32 bg-slate-50 rounded-full mt-4"></div>
        </div>
      </div>
    </section>
  );
}

export default CurrentWeatherSkeleton;