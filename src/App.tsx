import { useEffect, useState } from "react";
import TimerControl from "./components/TimerControl";

export default function App() {
	const [input, setInput] = useState('')
	const [products, setProducts] = useState([])
	
  return (
		<>
			<TimerControl />
			
		</>

  );
}