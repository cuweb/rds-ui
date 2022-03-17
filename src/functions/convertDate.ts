const convertDate = (time: string, format?: string | undefined) => {
    const event = new Date(time)
    const options: any = {
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
