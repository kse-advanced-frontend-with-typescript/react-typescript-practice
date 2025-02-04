import React from "react";
import {Greetings} from "./examples/classComponent";
import {useCounter} from "./utils/counter";

export const App: React.FC = () => {
    const counter = useCounter(3000)
    return <div>
        {/*Example 1*/}
        <Greetings name='Bob' tick={counter}  />


    </div>;
};
