import React, {useEffect, useLayoutEffect} from 'react'

type CompProps = {
    name: string
    tick: number
}

export const GreetingsFn: React.FC<CompProps> = (props) => {
    const { name, tick } = props

    useEffect(() => {
        console.log('useEffect: ', props.tick)

        return () => {
            console.log('cleanup function for last effect when counter is equal to ', props.tick)
        }
    }, [props.tick])

    useLayoutEffect(() => {
        console.log('useLayoutEffect ', props.tick)
        return () => {
            console.log('cleanup function for last LAYOUT effect when counter is equal to ', props.tick)
        }
    })

    return (
        <div>
            Hello {name} {tick}
        </div>
    )
}
