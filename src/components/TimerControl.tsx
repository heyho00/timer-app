import { useEffect, useState } from "react";
import { useBoolean, useCounter } from "usehooks-ts";

function Timer() {
    useEffect(()=>{
        const savedTitle = document.title;

		const id = setInterval(()=>{
			document.title = `Now: ${new Date().getTime()}`;
		},1000)

        return () => {
        clearInterval(id)
        document.title = savedTitle // 저장해둔 title로 원복해준다.
        // 결론적으로 useEffect의 return은 끝날때에 대한 처리이다.
    }
	})

    return <p>Playing</p>
}

export default function TimerControl() {
    const {value:playing, toggle} = useBoolean()
    const {count, increment} = useCounter(0)

    return (
        <div>
            {playing ?(
                <Timer />
            ): (
                <p>Stop</p>
            ) }
            <button type="button" onClick={toggle}>
                Toggle
            </button>
            <hr />
            <p>{count}</p>
            <button type="button" onClick={increment}>
                increase
            </button>
            
        </div>
    )
}