// components/pagination-controls.tsx
import Link from "next/link";

export default function PaginationControls({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) {
  const hasPrev = currentPage > 1;
  const hasNext = currentPage < totalPages;

  return (
    <div className="flex gap-4 items-center justify-center mt-12 mb-20">
      {hasPrev ? (
        <Link
          href={`/meals?page=${currentPage - 1}`}
          className="px-6 py-2 rounded-lg bg-gradient-to-r from-[#f9572a] to-[#ff9b05] text-white font-bold hover:from-[#fd6a3d] hover:to-[#ffab2e] transition-all shadow-md hover:shadow-lg"
        >
          Prev
        </Link>
      ) : (
        <button
          disabled
          className="px-6 py-2 rounded-lg bg-gray-500 text-white font-bold cursor-not-allowed opacity-50"
        >
          Prev
        </button>
      )}

      <span className="mx-4 text-[#ddd6cb] font-medium">
        Page <span className="font-bold text-white">{currentPage}</span> of{" "}
        <span className="font-bold text-white">{totalPages}</span>
      </span>

      {hasNext ? (
        <Link
          href={`/meals?page=${currentPage + 1}`}
          className="px-6 py-2 rounded-lg bg-gradient-to-r from-[#f9572a] to-[#ff9b05] text-white font-bold hover:from-[#fd6a3d] hover:to-[#ffab2e] transition-all shadow-md hover:shadow-lg"
        >
          Next
        </Link>
      ) : (
        <button
          disabled
          className="px-6 py-2 rounded-lg bg-gray-500 text-white font-bold cursor-not-allowed opacity-50"
        >
          Next
        </button>
      )}
    </div>
  );
}
