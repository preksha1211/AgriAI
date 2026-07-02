function LoadingSkeleton() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div
          key={item}
          className="animate-pulse rounded-3xl border border-[#214B3E] bg-[#163A2A] p-6"
        >
          <div className="mb-6 h-12 w-12 rounded-xl bg-[#214B3E]" />

          <div className="mb-4 h-6 w-40 rounded bg-[#214B3E]" />

          <div className="mb-3 h-4 w-full rounded bg-[#214B3E]" />

          <div className="mb-3 h-4 w-5/6 rounded bg-[#214B3E]" />

          <div className="mb-8 h-4 w-3/4 rounded bg-[#214B3E]" />

          <div className="flex gap-3">
            <div className="h-12 flex-1 rounded-xl bg-[#214B3E]" />
            <div className="h-12 flex-1 rounded-xl bg-[#214B3E]" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default LoadingSkeleton;