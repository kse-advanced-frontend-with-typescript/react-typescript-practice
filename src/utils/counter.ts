import { useState} from "react";

export const useCounter = (intervalMs: number): number => {
    const [ counter, setCounter ] = useState<number>(0);

    setInterval(() => {
        setCounter(counter + 1);
    }, intervalMs)


    return counter
}
