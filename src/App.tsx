import { useEffect, useState } from "react";
import TimerControl from "./components/TimerControl";
import useFetchProducts from "./hooks/useFetchProducts";


export default function App() {
	const products = useFetchProducts()

  return (
		<>
			<TimerControl />
			<p>Hello, world!</p>
		</>

  );
}