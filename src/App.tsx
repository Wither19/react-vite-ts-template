import { useState } from "react";

function App() {
	const [count, setCount] = useState(0);

	function handleCountInc() {
		setCount((prev) => prev + 1);
	}

	return (
		<>
			<h1>Hello World!</h1>
			<button onClick={handleCountInc}>Count: {count}</button>
		</>
	);
}

export default App;
