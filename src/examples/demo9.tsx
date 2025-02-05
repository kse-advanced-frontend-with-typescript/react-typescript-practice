import React, {Suspense, use} from 'react'

type Props = {
    data: Promise<string>
}
export const UsePromiseWithSuspence: React.FC<Props> = ({data}) => {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <p>{data}</p>
            </Suspense>
        </div>
    )
}

export const UsePromise: React.FC<Props> = ({data}) => {
    const res = use(data)
    return (
        <div>
            <p>{res}</p>
        </div>
    )
}
