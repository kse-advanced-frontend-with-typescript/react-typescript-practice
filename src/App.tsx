import React from "react";
import {Greetings} from "./examples/demo1";
import {useCounter} from "./utils/counter";
import {GreetingsFn} from "./examples/demo2";
import {StateDemo} from "./examples/demo3";
import {ComponentWithReducer} from "./examples/demo4";
import {CounterWithUseMemo} from "./examples/demo5";
import {CounterWithUseRef} from "./examples/demo6";
import {Catalog} from "./examples/demo8";

export const App: React.FC = () => {
    const counter = useCounter(3000)
    return <div>
        {/*Example 1*/}
        {/*<Greetings name='Bob' tick={counter}  />*/}
        {/*<GreetingsFn name='Bob' tick={counter}  />*/}
        {/*<StateDemo />*/}
        {/*<ComponentWithReducer />*/}
        <CounterWithUseRef />
        {/*<CounterWithUseMemo />*/}
        {/*<Catalog  />*/}
    </div>;
};
