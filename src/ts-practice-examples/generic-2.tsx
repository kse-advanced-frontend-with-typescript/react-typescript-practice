import React, {useEffect, useState} from "react";

const memoized = memo(calculate)

export const List: React.FC = () => {
    const [result, setResult] = useState(false);
    const [time, setTime] = useState<string>(new Date().toUTCString());
    useEffect(() => {
        setTimeout(() => {
            setTime(new Date().toUTCString())
        }, 1000)
        const res = memoized('10:00')
        setResult(res)
    }, [time])

    return <div>
        <p>{time}</p>
        <p>Calculated: {result ? 'done' : 'in progress'}</p>
    </div>
}


function calculate(parameter: string) {
    console.log(parameter)
    for (let i = 0; i < 3999999999; i++) {
        //
    }
    return true;
}

function memo(fn: any) {
    const memoized = new Map<string, unknown>();


    return (...args: any[]) => {

        const hash = args.join('|')
        const restoredData = memoized.get(hash)
        if (restoredData) {
            return restoredData
        }

        const res =  fn(...args)
        memoized.set(hash, res)
        return res
    }
}
