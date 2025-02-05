import React, {useEffect, useState} from "react";

export const List: React.FC = () => {
    const [result, setResult] = useState(false);
    const [time, setTime] = useState<string>(new Date().toUTCString());
    useEffect(() => {
        setTimeout(() => {
            setTime(new Date().toUTCString())
        }, 1000)
        const res = calculate()
        setResult(res as unknown as boolean)
    }, [time])

    return <div>
        <p>{time}</p>
        <p>Calculated: {result ? 'done' : 'in progress'}</p>
    </div>
}


function calculate() {
    for (let i = 0; i < 3999999999; i++) {
        //
    }
    return true;
}

function memo(fn: (...args: unknown[]) => unknown) {
    // to implement!
}
