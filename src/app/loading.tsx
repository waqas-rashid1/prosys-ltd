export default function Loading() {
  return (
    <div className="min-h-screen bg-dark-primary flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-full border-2 border-accent/20" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-accent animate-spin" />
        </div>
        <span className="font-heading text-sm text-text-light-muted tracking-widest uppercase">
          Loading
        </span>
      </div>
    </div>
  );
}
