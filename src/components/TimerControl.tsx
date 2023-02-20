import { useEffect, useRef, useState } from "react";

function Timer() {
    useEffect(()=>{
        const savedTitle = document.title;

		const id = setInterval(()=>{
			document.title = `Now: ${new Date().getTime()}`;
		},2000)

        return () => {
        clearInterval(id)
        document.title = savedTitle // 저장해둔 title로 원복해준다.
        // 결론적으로 useEffect의 return은 끝날때에 대한 처리이다.
    }
	})

    return <p>Playing</p>
}

export default function TimerControl() {
    // const ref = {
    //     value: 1,
    // }
    // ref.value = 2
    // 이런 ref를 만들고
    // const로 만든 ref 지만 ref.value의 값은 변경 가능하다. 이런 개념.
    // 각자 다른 컴포넌트들이 자신들만의 이런 객체를 갖고싶어 -> useRef

    const ref = useRef(1)
    // useState는 상태가 변경되면 해당 컴포넌트와 하위 컴포넌트를 다시 렌더링함.
    // useRef는 ref.current 값이 변해도 리렌더 안함. 
    // 다른 이유로 렌더될때만 반영됨.

    const [playing, setPlaying] = useState(false)

    const handleClick = () => {
        ref.current += 1
        // setPlaying(!playing)
    }
console.log(ref.current,'ss')
    return (
        <div>
            {/* {playing ?(
                <Timer />
            ): (
                <p>Stop</p>
            ) } */}
            <button type="button" onClick={handleClick}>
                Toggle
            </button>
            <button type="button" onClick={()=>console.log(ref.current)}>see ref</button>

            <p>{ref.current}</p>
        </div>
    )
}