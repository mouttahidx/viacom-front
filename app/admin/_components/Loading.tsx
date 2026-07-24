"use client";

export function Spinner({
  className = "h-8 w-8 border-slate-200 border-t-[#F05423]",
}: {
  className?: string;
}) {
  return (
    <div
      className={`animate-spin rounded-full border-2 ${className}`}
      role="status"
      aria-label="Chargement"
    />
  );
}

export function PageLoader({ label = "Chargement..." }: { label?: string }) {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 text-slate-500">
      <Spinner className="h-10 w-10" />
      <p className="text-sm font-medium animate-pulse">{label}</p>
    </div>
  );
}

export function Skeleton({ className = "" }: { className?: string }) {
  return (
    <div
      className={`animate-pulse rounded-lg bg-slate-200/80 ${className}`}
      aria-hidden
    />
  );
}

export function PostsTableSkeleton() {
  return (
    <div className="space-y-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="flex items-center gap-4 rounded-xl border border-slate-100 bg-white p-4"
        >
          <Skeleton className="h-14 w-20 shrink-0" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
          </div>
          <Skeleton className="h-8 w-24" />
        </div>
      ))}
    </div>
  );
}
