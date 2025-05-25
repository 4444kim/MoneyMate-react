export default function TransactionSkeleton() {
  return (
    <ul className="flex flex-col gap-[10px]">
      {Array.from({ length: 3 }).map((_, i) => (
        <li key={i} className="h-[60px] bg-gray-200 animate-pulse rounded-lg" />
      ))}
    </ul>
  );
}
