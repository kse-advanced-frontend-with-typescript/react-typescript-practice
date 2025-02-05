import React, {useRef, useState} from 'react'

export const CounterWithUseRef = () => {
    const [counter, setCounter] = useState(0)
    const ref = useRef<HTMLInputElement>(null)
    const ref1 = useRef(0)
    console.log(ref1)
    const save = () => {
        ref1.current = 10
        if (ref.current) {
            setCounter(Number(ref.current.value))
        }
    }

    return (
        <div>
            Counter: {counter}
            <input ref={ref} type="text" defaultValue={0} />
            <button onClick={save}>Save</button>
        </div>
    )
}
