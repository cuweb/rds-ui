const convertDate = (time, format) => {
    const event = new Date(time)
    const options = {
        long: { weekday: 'long', month: 'long', day: 'numeric' },
    }
    return event.toLocaleDateString('en-US', {
        ...options[format || 'long'],
        timeZone: 'UTC',
    })
}

export default convertDate
