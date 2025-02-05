import React, { useState, memo, useCallback } from 'react'

type Props = {
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

const Form: React.FC<Props> = ({ onClick }) => {
    console.log('Form has been re-rendered')
    return (
        <div>
            Form here <button onClick={onClick}>Click me!</button>
        </div>
    )
}

const FormWithMemo = memo(Form)

export const Catalog: React.FC = () => {
    const [val, setVal] = useState(0)
    const rawClick = () => setVal(Date.now())
    const onClick = useCallback(rawClick, [])
    return (
        <div>
            {val}
            <FormWithMemo onClick={onClick} />
        </div>
    )
}
