import { useEffect, useRef, useState } from "react";
import books from "./bookData";
import BookCard from "./BookCard";

function App() {
  const [bookCode, setBookCode] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);
  const inputRef = useRef(null);

  const handleChange = (e) => {
    setBookCode(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const scannedCode = bookCode.trim();
      if (!scannedCode) return;

      const filtered = books.filter(
        (book) =>
          `0${book.oldCode}` === scannedCode ||
          `0${book.newCode}` === scannedCode
      );
      setFilteredBooks(filtered);
      setTimeout(() => {
        setBookCode("");
      }, 1000);
    }

    setTimeout(() => {
      setBookCode("");
    }, 3000);
  };

  return (
    <>
      <footer className="footer sm:footer-horizontal footer-center  bg-accent-content text-base-content py-2 flex items-center justify-between px-6">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            Maktaba Tul Madinah
          </p>
        </aside>
        <h1 className="font-medium">Maktaba-Tul-Madinah</h1>
      </footer>
      <div className="flex flex-col items-center justify-center h-dvh">
        <input
          ref={inputRef}
          type="text"
          className="w-full max-w-3xl mx-auto text-center text-3xl lg:text-4xl py-6 px-8 rounded-2xl border-4 border-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-300 shadow-lg transition-all duration-300 placeholder-gray-400"
          placeholder="Scan Book Barcode"
          value={bookCode}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />

        {/* <input
          ref={inputRef}
          type="text"
          className="input text-center text-3xl w-2xl py-8"
          placeholder="Scan Book Barcode"
          value={bookCode}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        /> */}

        <div>
          {/* {filteredBooks.length === 0 && (
            <div className="hero my-20">
              <div className="hero-content flex-col items-center justify-center">
                <h1 className="text-5xl font-bold">No Book Found</h1>
                <p className="text-2xl">Please contact the counter.</p>
              </div>
            </div>
          )} */}
          {/* {filteredBooks.length > 0 &&
            filteredBooks.map((data) => (
              <div className="hero my-20" key={data.newCode}>
                <div className="hero-content flex-col lg:flex-row">
                  <figure>
                    {data.newCode && (
                      <img
                        src={`https://maktabatulmadinah.com/Images/${`0${data.newCode}`}/01.webp`}
                        className="max-w-120 rounded-lg"
                        alt="Book"
                      />
                    )}
                  </figure>
                  <div className="flex flex-col gap-4">
                    <h1 className="text-5xl font-bold">
                      {data.bookNameInEnglish}
                    </h1>
                    <h1 className="text-5xl font-bold mb-6 text-right">
                      {data.bookNameInUrdu}
                    </h1>
                    <h4 className="text-emerald-400 text-6xl font-bold">
                      Rs. {data.priceAfterDiscount}/-
                    </h4>
                  </div>
                </div>
              </div>
            ))} */}
          {filteredBooks.length === 0 && (
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
    </>
  );
}

export default App;
