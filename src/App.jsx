import { useEffect, useRef, useState } from "react";
import books from "./bookData";

function App() {
  // const [bookCode, setBookCode] = useState();
  // const [filteredBooks, setFilteredBooks] = useState([]);
  // useEffect(() => {
  // 	const filtered = books.filter((book) => book.newCode === bookCode);
  // 	setFilteredBooks(filtered);
  // }, [bookCode]);
  // console.log(filteredBooks);
  // return (
  // 	<>
  // 		<div className="flex flex-col items-center justify-center h-screen">
  // 			<input
  // 				type="number"
  // 				className="input text-center"
  // 				required
  // 				placeholder="Search book code"
  // 				min="1"
  // 				max="10"
  // 				title="Must be between be 1 to 10"
  // 				onChange={(e) => setBookCode(e.target.value)}
  // 			/>
  // 			<div className="">
  // 				{filteredBooks.map((data) => {
  // 					return (
  // 						<div className="hero  my-20">
  // 							<div className="hero-content flex-col lg:flex-row">
  // 								<figure>
  // 									<img
  // 										src={`https://maktabatulmadinah.com/Images/${data.newCode}/01.png`}
  // 										class="max-w-80 rounded-lg"
  // 									/>
  // 								</figure>
  // 								<div className="flex flex-col gap-4 text-center">
  // 									<h1 className="text-3xl font-bold">
  // 										{data.bookNameInUrdu}
  // 									</h1>
  // 									<h1 className="text-3xl font-bold mb-5">
  // 										{data.bookNameInEnglish}
  // 									</h1>
  // 									{/* <p className="py-6">
  // 										Provident cupiditate voluptatem et in. Quaerat fugiat ut
  // 										assumenda excepturi exercitationem quasi. In deleniti
  // 										eaque aut repudiandae et a id nisi.
  // 									</p> */}
  // 									<button className="btn btn-success btn-xl text-white text-2xl flex items-center justify-center">
  // 										Rs. {data.price}/-
  // 									</button>
  // 								</div>
  // 							</div>
  // 						</div>
  // 					);
  // 				})}
  // 			</div>
  // 		</div>
  // 	</>
  // );

  const [bookCode, setBookCode] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);
  const inputRef = useRef(null); // ✅ Input field ka reference

  // const handleSearch = (e) => {
  // 	const inputValue = e.target.value.trim();
  // 	setBookCode(inputValue); // ✅ Scanner se jo value aaye, set ho jaye

  // 	if (!inputValue) return; // Agar empty hai toh kuch na karo

  // 	const filtered = books.filter((book) => book.newCode === inputValue);
  // 	setFilteredBooks(filtered);
  // 	// ✅ 1.5 min (90s) ke baad data remove karne ka timer
  // 		// setTimeout(() => {
  // 		// 	setFilteredBooks([]);
  // 		// }, 90000);
  // };

  const handleChange = (e) => {
    setBookCode(e.target.value); // ✅ Har key press pe full value update ho rahi hai
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const scannedCode = bookCode.trim();
      if (!scannedCode) return;

      const filtered = books.filter(
        (book) => book.newCode === scannedCode || book.oldCode === scannedCode
      );
      setFilteredBooks(filtered);

      // ✅ Optional: Clear after 2s
      setTimeout(() => {
        setBookCode("");
      }, 1000);
    }
  };

  // // ✅ Jab bhi `bookCode` change ho, input ko select karo
  // useEffect(() => {
  // 	if (inputRef.current) {
  // 		inputRef.current.focus();
  // 		inputRef.current.select();
  // 	}
  // }, [bookCode]); // ✅ Jab bhi scanner se naya code aaye, trigger hoga

  return (
    <>
      <footer className="footer sm:footer-horizontal footer-center  bg-accent-content text-base-content py-2 flex items-center justify-between px-6">
        <button className="btn btn-sm px-6">Login</button>
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
          className="input text-center text-3xl w-2xl py-8"
          placeholder="Scan Book Barcode"
          value={bookCode}
          onChange={handleChange} // ✅ Yeh zaroori hai
          onKeyDown={handleKeyDown}
        />

        <div>
          {filteredBooks.map((data) => (
            <div className="hero my-20" key={data.newCode}>
              <div className="hero-content flex-col lg:flex-row">
                <figure>
                  <img
                    src={`https://maktabatulmadinah.com/Images/${data.newCode}/01.png`}
                    className="max-w-120 rounded-lg"
                    alt="Book"
                  />
                </figure>
                <div className="flex flex-col gap-4">
                  <h1 className="text-5xl font-bold">
                    {data.bookNameInEnglish}
                  </h1>
                  <h1 className="text-5xl font-bold mb-6 text-right">
                    {data.bookNameInUrdu}
                  </h1>
                  <h4 className="text-emerald-400 text-6xl font-bold">
                    Rs. {Math.round(data.price * (100 / 100))}/-
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
