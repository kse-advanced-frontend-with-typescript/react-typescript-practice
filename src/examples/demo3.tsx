import React, {useState} from 'react';

export const StateDemo: React.FC = () => {
    const [counter, setCounter ] = useState<number>(0)

    setTimeout(() => {
        setCounter(counter + 1)
    }, 2000)

    return <div>{counter}</div>
}
