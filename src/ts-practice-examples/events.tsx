type Props = {
    onClick: (...args: unknown[]) => void
}

export const Banner: React.FC<Props> = ({ onClick}) => {
    return <div>
        <p>By me now!</p>
        <button onClick={onClick}>Buy now</button>
    </div>
}


export function eventReporter(event: unknown) {
    console.log(event, new Date().toUTCString())
}
