'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-bg text-white gap-4">
      <h2 className="text-2xl font-mono text-red-500">SYSTEM MALFUNCTION</h2>
      <p className="text-gray-400">{error.message || 'Something went wrong!'}</p>
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-emerald-600 rounded hover:bg-emerald-500 transition-colors font-mono text-sm"
      >
        REBOOT SYSTEM
      </button>
    </div>
  );
}
