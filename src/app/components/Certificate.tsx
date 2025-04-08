"use client";

import { useState } from "react";

type PdfFile = {
  id: string;
  title: string;
};

const pdfFiles: PdfFile[] = [
  {
    id: "1X1qxtwOK3oYUYEe-k48oue4anHaheqVN",
    title: "Full-stack Software Engineer - RevoU",
  },
  {
    id: "1J0uOJB5F2HB_cQdC3EoQEA9SMRE82t_O",
    title: "Certificate of Excellence Software Engineer - RevoU",
  },
  {
    id: "1tFBb7n2h7aZnHLUcyj0BeoMiVQsq-DqD",
    title: "Belajar Dasar Pemrograman Web - Dicoding",
  },
  {
    id: "1gb0Q1FY0LgvW4QnDjL1eURRVOeECEfQB",
    title: "Tech Talk 4.0: The Future of AI in Web Development - GDSC Widyatama",
  },
  {
    id: "1hffi_rKN4Q7rpp-bx2snaEO2m1zJH2Rk",
    title: "Pengenalan Pemrograman - Codepolitan",
  },
  {
    id: "12e46mxTXJLAZyJWqQhPfjxXfzw__shWL",
    title: "Front End Basic - Codepolitan",
  },
 
];

export default function Certificate() {
  const [showAll, setShowAll] = useState(false);
  const Certificates = showAll ? pdfFiles : pdfFiles.slice(0, 3);
  return (
    <div className="w-full  md:max-w-3xl xl:max-w-5xl mx-0 xl:mx-auto mt-20  py-8">
      {/* <h2 className="text-2xl font-bold mb-6 text-center">My Certificates</h2> */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {Certificates.map((pdf, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 border border-gray-300 dark:border-gray-600"
          >
            <iframe
              src={`https://drive.google.com/file/d/${pdf.id}/preview`}
              width="100%"
              height="300"
              allow="autoplay"
              className="rounded"
              title={pdf.title}
            ></iframe>
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white text-center mt-1">
              {pdf.title}
            </h3>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <button
          onClick={() => setShowAll((prev) => !prev)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg transition-all"
        >
          {showAll ? "Show Less Certificates" : "Load More Certificates"}
        </button>
      </div>
    </div>
  );
}
