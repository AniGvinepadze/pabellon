// /components/PdfViewer.tsx
import { useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import only Document and Page components from react-pdf
const Document = dynamic(() => import("react-pdf").then((mod) => mod.Document), { ssr: false });
const Page = dynamic(() => import("react-pdf").then((mod) => mod.Page), { ssr: false });

const PdfViewer = ({ filePath }: { filePath: string }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  const onLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setLoading(false); // Set loading to false when PDF is successfully loaded
  };

  const onLoadError = (error: any) => {
    console.error("Error loading PDF: ", error);
    setError("Failed to load PDF");
    setLoading(false); // Set loading to false on error
  };

  return (
    <div>
      {/* Display loading message while the PDF is loading */}
      {loading && <p>Loading PDF...</p>}
      {/* Display error message if PDF fails to load */}
      {error && <p>{error}</p>}

      {/* Render the PDF document */}
      <Document file={filePath} onLoadSuccess={onLoadSuccess} onLoadError={onLoadError}>
        {/* Render the current page */}
        {numPages !== null && <Page pageNumber={pageNumber} />}
      </Document>

      {/* Navigation for pages */}
      <div>
        <p>
          Page {pageNumber} of {numPages ?? 0} {/* Use 0 as fallback if numPages is null */}
        </p>
        <button onClick={() => setPageNumber(pageNumber - 1)} disabled={pageNumber <= 1}>
          Previous
        </button>
        <button onClick={() => setPageNumber(pageNumber + 1)} disabled={pageNumber >= (numPages ?? 0)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default PdfViewer;
