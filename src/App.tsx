import { useEffect, useState } from "react";
import TimerControl from "./components/TimerControl";

export default function App() {
	const [input, setInput] = useState('')
	const [products, setProducts] = useState([])

	// 1.
    // useEffect(()=>{
	// 	console.log('effect')
    //   document.title = `Now: ${new Date().getTime()}`;
	// })
	//이런 상태면 input 값이 들어갈때마다 리렌더..'effect'가 출력된다.

	// 2.
	// useEffect(()=>{
	// 	console.log('effect')
	// 	setInterval(()=>{
	// 		document.title = `Now: ${new Date().getTime()}`;
	// 	},2000)
	// })
	// 이렇게하면 2초에 한번씩 title이 변함.
	// 얘는 Timer.tsx 로 빼준다.

	//3. <TimerControl />로 빼서 아래에 넣어줌.
	// function Timer() {
	//     useEffect(()=>{
	// 		console.log('effect')
	// 		setInterval(()=>{
	// 			document.title = `Now: ${new Date().getTime()}`;
	// 		},2000)
	// 	})
	//     return null
	// }
	// Toggle 버튼을 눌러도 이 Timer가 작동을 멈추지않고 Timer가 계속 바뀌어버린다.
	// 컴포넌트 자체를 없앴는데 사라지지 않는데, 어떻게 해야하나.
	// useEffect 안에서 함수를 리턴해서 종료처리를 해준다. (cleanup이라고 보편적으로 부름)

	// 4.
	// setInterval은 interval 하는 타이머 id를 준다. 이걸 이용해
	// function Timer() {
    // useEffect(()=>{
	// 	const id = setInterval(()=>{
	// 		document.title = `Now: ${new Date().getTime()}`;
	// 	},2000)
    //     return () => {
    //     console.log('end of effect')
    //     clearInterval(id)
    // }
	// })
    // return <p>Playing</p>
	// }
	// useEffect 안의 return 함수  는 렌더가 끝날때 useEffect를 종료처리 해준다.? 
	// 렌더가 끝날때 실행되는 함수이다? 맞는 표현인가.

	//5. 이런식으로 dependency array 이용함.
	// fetch 처음 한번만 받고싶을때 빈배열로.
	// state 변화에 영향을 받는 , 리렌더 하고싶은 의존성이 있으면 배열에 넣는다.
	// 	useEffect(() => {
	// 	const fetchProducts = async () => {
	// 		const url = 'http://localhost:3000/products';
	// 		const response = await fetch(url);
	// 		const data = await response.json();
	// 		setProducts(data.products);
	// 	};
	// 	fetchProducts();
	// }, []);
	// 안에 함수를 밖으로 빼도된다. fetchProducts를. 그러나
	// useEffect 클로저라서 안에서 참조하는 다른 state가 있으면 그걸 처음에 바인딩해서
	// 사용하기 때문에 문제가 될 수 있다.
	// https://overreacted.io/ko/a-complete-guide-to-useeffect/#%ED%95%A8%EC%88%98%EB%A5%BC-%EC%9D%B4%ED%8E%99%ED%8A%B8-%EC%95%88%EC%9C%BC%EB%A1%9C-%EC%98%AE%EA%B8%B0%EA%B8%B0
	// 가능하면 다 안쪽으로 넣으라는 말.
	
  return (
		<>
			<TimerControl />
			<p>Hello, world!</p>
			<input type="text" onChange={(e)=>setInput(e.target.value)}/>
		</>

  );
}