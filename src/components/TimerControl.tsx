import { useEffect, useState } from "react";

function Timer() {
    useEffect(()=>{
		const id = setInterval(()=>{
			document.title = `Now: ${new Date().getTime()}`;
		},2000)

        return () => {
        console.log('end of effect')
        clearInterval(id)
    }
	})
    return <p>Playing</p>
}

export default function TimerControl() {
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