import { useEffect, useState } from "react";

export default function Pagin({ currentPage, setCurrentPage }) {
  const [pages] = useState(50);

  return (
    <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8 h-[5%] z-5">
      <div className="flex items-center justify-between text-sm text-gray-600 font-medium">
        <button
          type="button"
          onClick={() => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))}
          className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50 cursor-pointer"
        >
          Previous
        </button>
        <div>
          Page {currentPage} of {pages}
        </div>
        <button
          type="button"
          onClick={() =>
            setCurrentPage((prev) => (prev < pages ? prev + 1 : prev))
          }
          className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50 cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
}
