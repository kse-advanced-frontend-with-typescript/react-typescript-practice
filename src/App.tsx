import React from "react";
import {Greetings} from "./examples/demo1";
import {useCounter} from "./utils/counter";
import {GreetingsFn} from "./examples/demo2";
import {StateDemo} from "./examples/demo3";
import {ComponentWithReducer} from "./examples/demo4";
import {CounterWithUseMemo} from "./examples/demo5";
import {CounterWithUseRef} from "./examples/demo6";
import {Catalog} from "./examples/demo7-8";
import {CatalogList} from "./ts-practice-examples/generic-1";
import {List} from "./ts-practice-examples/generic-2";
import {Banner, eventReporter} from "./ts-practice-examples/events";

export const App: React.FC = () => {
    const counter = useCounter(3000)
    return <div>
        {/*Example 1*/}
        {/*<Greetings name='Bob' tick={counter}  />*/}

        {/*Example 2*/}
        {/*<GreetingsFn name='Bob' tick={counter}  />*/}

        {/*Example 3*/}
        {/*<StateDemo />*/}

        {/*Example 4*/}
        {/*<ComponentWithReducer />*/}

        {/*Example 5*/}
        {/*<CounterWithUseRef />*/}

        {/*Example 6*/}
        {/*<CounterWithUseMemo />*/}

        {/*Example 7 and 8*/}
        {/*<Catalog  />*/}



        {/*Practice*/}
        {/*<CatalogList />*/}
        {/*<List />*/}
        <Banner onClick={eventReporter} />
    </div>;
};
