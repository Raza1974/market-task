// import React, { useState } from "react";

// export default function Section9() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const totalPages = 3;

//   const goToFirstPage = () => {
//     setCurrentPage(1);
//   };

//   const goToNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage((prev) => prev + 1);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center my-10">
//       <div className="w-[400px] h-[74px] flex justify-between items-center border border-gray-400 rounded-lg p-2">
//         {/* First Button */}
//         <button
//           className={`w-20 h-full flex justify-center items-center text-sm font-bold border-r border-gray-400 px-4 rounded-l-md ${
//             currentPage === 1 ? "text-gray-400 cursor-not-allowed" : "text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white"
//           }`}
//           onClick={goToFirstPage}
//           disabled={currentPage === 1}
//         >
//           First
//         </button>

//         {/* Page Buttons */}
//         {[1, 2, 3].map((page) => (
//           <button
//             key={page}
//             className={`w-12 h-12 mx-1 text-sm font-bold rounded-md transition duration-200 ${
//               currentPage === page
//                 ? "bg-[#23A6F0] text-white"
//                 : "text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white"
//             }`}
//             onClick={() => setCurrentPage(page)}
//           >
//             {page}
//           </button>
//         ))}

//         {/* Next Button */}
//         <button
//           className={`w-20 h-full flex justify-center items-center text-sm font-bold border-l border-gray-400 px-4 rounded-r-md ${
//             currentPage === totalPages ? "text-gray-400 cursor-not-allowed" : "text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white"
//           }`}
//           onClick={goToNextPage}
//           disabled={currentPage === totalPages}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }


"use client"; // Ensure this component runs only on the client

import React, { useState, useEffect } from "react";

export default function Section9() {
  const totalPages = 3;
  const [currentPage, setCurrentPage] = useState<number | null>(null);

  // Ensure state is set only on the client side
  useEffect(() => {
    setCurrentPage(1);
  }, []);

  if (currentPage === null) return null; // Prevent rendering until client-side execution

  const goToFirstPage = () => setCurrentPage(1);
  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev! + 1);
  };

  return (
    <div className="flex justify-center items-center my-10">
      <div className="w-[400px] h-[74px] flex justify-between items-center border border-gray-400 rounded-lg p-2">
        {/* First Button */}
        <button
          className={`w-20 h-full flex justify-center items-center text-sm font-bold border-r border-gray-400 px-4 rounded-l-md ${
            currentPage === 1 ? "text-gray-400 cursor-not-allowed" : "text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white"
          }`}
          onClick={goToFirstPage}
          disabled={currentPage === 1}
        >
          First
        </button>

        {/* Page Buttons */}
        {[1, 2, 3].map((page) => (
          <button
            key={page}
            className={`w-12 h-12 mx-1 text-sm font-bold rounded-md transition duration-200 ${
              currentPage === page
                ? "bg-[#23A6F0] text-white"
                : "text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white"
            }`}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}

        {/* Next Button */}
        <button
          className={`w-20 h-full flex justify-center items-center text-sm font-bold border-l border-gray-400 px-4 rounded-r-md ${
            currentPage === totalPages ? "text-gray-400 cursor-not-allowed" : "text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white"
          }`}
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}
