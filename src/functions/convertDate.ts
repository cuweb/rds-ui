interface TypeProps {
    [index: string]: object
}

type convertDateTypes = 'long' | 'month' | 'day' | undefined

const convertDate = (time: string, format?: convertDateTypes) => {
    const event = new Date(time)
    const options: TypeProps = {
        long: { weekday: 'long', month: 'long', day: 'numeric' },
        month: {
            month: 'short',
        },
        day: {
            day: 'numeric',
        },
    }
    return event.toLocaleDateString('en-US', {
        ...options[format || 'long'],
        timeZone: 'UTC',
    })
}

export default convertDate
