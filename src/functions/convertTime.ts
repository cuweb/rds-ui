interface timeOptionsTypes {
    default: TypeProps
    timeZone: string
}

interface TypeProps {
    [index: string]: string | boolean
}

type convertTimeTypes = 'default' | undefined

export const convertTime = (time: string, format?: convertTimeTypes) => {
    const options: timeOptionsTypes = {
        default: {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
        },
        timeZone: 'UTC',
    }
    return new Date(time).toLocaleTimeString(
        'en-US',
        options[format || 'default']
    )
}

export default convertTime
