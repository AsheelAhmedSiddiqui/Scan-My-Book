import { useState } from "react";
import books from "./bookData";

function App() {
	const [count, setCount] = useState(0);

	setCount(books);
	console.log(count);
	return (
		<>
			<div className="text-2xl text-blue-900">Asheel Ahmed Siddiqui</div>
		</>
	);
}

export default App;
