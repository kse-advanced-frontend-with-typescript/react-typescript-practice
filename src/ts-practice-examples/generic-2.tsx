import React, {useEffect, useState} from "react";

export const List: React.FC = () => {
    const [result, setResult] = useState(false);
    useEffect(() => {
        setResult(calculate())
    })

    return <div>Calculated: {result ? 'done' : 'in progress'}</div>
}


function calculate() {
    for (let i = 0; i < 1999999999; i++) {
        //
    }
    return true;
}
