import { useEffect, useRef, useState } from "react";
import books from "./bookData";
import BookCard from "./BookCard";
import Marquee from "react-fast-marquee";

function App() {
  const [bookCode, setBookCode] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);
  const inputRef = useRef(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleChange = (e) => {
    setBookCode(e.target.value);
  };

  const handleKeyDown = (e) => {
    setHasSearched(true);
    if (e.key === "Enter") {
      const scannedCode = bookCode.trim();
      if (!scannedCode) return;

      const filtered = books.filter(
        (book) =>
          `${book.oldCode}` === scannedCode || `${book.newCode}` === scannedCode
      );
      setFilteredBooks(filtered);
      setTimeout(() => {
        setBookCode("");
      }, 1000);
    }

    setTimeout(() => {
      setBookCode("");
    }, 500);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center mt-16">
        <input
          ref={inputRef}
          type="text"
          className="w-full max-w-3xl mx-auto text-center text-3xl lg:text-4xl py-6 px-8 border-none focus:outline-none"
          // placeholder="Scan Book Barcode"
          value={bookCode}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />

        <div>
          {!hasSearched && (
            <div className="max-w-lg mx-auto my-24 bg-white rounded-3xl shadow-lg p-12 flex flex-col items-center justify-center transition-transform transform hover:scale-105 duration-300">
              <img
                src="https://maktabatulmadinah.com/storage/frontendsetting/1758110585136789.webp"
                alt=""
              />
            </div>
          )}
          {hasSearched && filteredBooks.length === 0 && (
            <div className="max-w-lg mx-auto my-24 bg-white rounded-3xl shadow-lg p-12 flex flex-col items-center justify-center transition-transform transform hover:scale-105 duration-300">
              <h1 className="text-5xl font-extrabold text-gray-900 mb-6 text-center">
                No Book Found
              </h1>
              <p className="text-2xl text-gray-600 text-center">
                Please contact the counter.
              </p>
            </div>
          )}

          {filteredBooks.length > 0 &&
            filteredBooks.map((data) => (
              <BookCard key={data.newCode} data={data} />
            ))}
        </div>
      </div>
      <footer className="footer sm:footer-horizontal footer-center  bg-accent-content text-base-content py-2 h-16 flex items-center justify-between px-6 absolute bottom-0">
        <Marquee
          speed={100}
          pauseOnHover={true}
          className="text-white font-medium text-2xl mr- block"
        >
          {`Welcome to Maktaba-Tul-Madinah KWBF (Karachi World Book Fair) 2025 Stall No 21, 22, 23`}
        </Marquee>
      </footer>
    </>
  );
}

export default App;
