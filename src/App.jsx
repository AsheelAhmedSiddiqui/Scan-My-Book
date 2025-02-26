import { useEffect, useState } from "react";
import books from "./bookData";

function App() {
	const [bookCode, setBookCode] = useState();

	return (
		<>
			<input type="text" />
			<button className="btn btn-xl">Xlarge</button>
			{books.map((data) => (
				<div className="text-xs" key={data.newCode}>
					{data.newCode}
				</div>
			))}
		</>
	);
}

export default App;
