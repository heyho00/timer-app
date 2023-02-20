import { useEffect, useState } from "react";

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
    const ref = {
        value: 1,
    }
    ref.value = 2
    // 이런 ref를 만들고
    // const로 만든 ref 지만 ref.value의 값은 변경 가능하다. 이런 개념.
    // 각자 다른 컴포넌트들이 자신들만의 이런 객체를 갖고싶어 -> useRef

    const [playing, setPlaying] = useState(false)

    const handleClick = () => {
        setPlaying(!playing)
    }

    return (
        <div>
            {playing ?(
                <Timer />
            ): (
                <p>Stop</p>
            ) }
            <button type="button" onClick={handleClick}>
                Toggle
            </button>
        </div>
    )
}