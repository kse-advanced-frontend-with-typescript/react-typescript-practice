import React, {useReducer} from "react";

export const ComponentWithReducer: React.FC = () => {
    const [ value, dispatch ] = useReducer(reducer, 0)

    setTimeout(() => {
        dispatch({
            type: 'set',
            value: value + 1
        })
    }, 2000)

    return <div>{value}</div>
}

const reducer: React.Reducer<number, { type: 'set', value: number }> = (state, action) => {
    switch (action.type) {
        case "set":
            return action.value
        default:
            return action.value
    }
}
