import React, { useState, useMemo, useEffect } from 'react'

export const CounterWithUseMemo: React.FC = () => {
    const [counter, setCounter] = useState(0)

    const count = useMemo(() => {
        for (let i = 0; i < 9999999999; ++i) {
            // Some complex and long calculation is happening here
        }
        return 100
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setCounter(count + counter)
        }, 1000)
    }, [counter])

    return <div>Counter: {counter}</div>
}
