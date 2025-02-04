import React from "react";
import {Greetings} from "./examples/classComponent";

export const App: React.FC = () => {
    return <div>
        <Greetings name='Bob' tick={1}  />
    </div>;
};
