function ChartSkeleton() {
  return (
    <div className="w-full h-[250px] rounded-lg bg-white border border-gray-200 p-10 animate-pulse">
      <div className="h-5 bg-gray-200 rounded w-32 mb-6" />
      <div className="flex items-center justify-between h-full">
        {[...Array(7)].map((_, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <div className="w-8 bg-gray-300 rounded-md" style={{ height: `${40 + i * 10}px` }} />
            <div className="h-3 w-8 bg-gray-200 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChartSkeleton;
