import {useEffect, useState} from "react";

export const useCounter = (intervalMs: number): number => {
    const [ counter, setCounter ] = useState<number>(0);
    useEffect(() => {
        setTimeout(() => {
            setCounter(counter + 1);
        }, intervalMs)
    }, [ counter ])

    return counter
}
