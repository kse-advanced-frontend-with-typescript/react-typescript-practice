import React from "react";
import {Greetings} from "./examples/demo1";
import {useCounter} from "./utils/counter";
import {GreetingsFn} from "./examples/demo2";

export const App: React.FC = () => {
    const counter = useCounter(3000)
    return <div>
        {/*Example 1*/}
        {/*<Greetings name='Bob' tick={counter}  />*/}
        <GreetingsFn name='Bob' tick={counter}  />

    </div>;
};
