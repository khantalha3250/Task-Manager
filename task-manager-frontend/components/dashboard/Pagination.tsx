interface PaginationProps {
  page: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
}

export default function Pagination({
  page,
  totalPages,
  onPrev,
  onNext,
}: PaginationProps) {
  return (
    <div className="flex justify-between items-center mt-6">
      <button
        onClick={onPrev}
        disabled={page === 1}
        className="px-3 py-1 text-gray-900 rounded border disabled:opacity-50"
      >
        Previous
      </button>

      <span className="text-sm text-gray-600">
        Page {page} of {totalPages}
      </span>

      <button
        onClick={onNext}
        disabled={page === totalPages}
        className="px-3 py-1 text-gray-900 rounded border disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
