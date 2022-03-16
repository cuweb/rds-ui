const convertDateAndTime = (time, format) => {
    const event = new Date(time.split(", ")[0])
    const options = {
        long: { month: 'short', day: 'numeric' },
    }

    const month = event.toLocaleDateString('en-US', {
        ...options[format || 'long'],
        timeZone: 'UTC',
    }).split(" ")[0]

    const day = event.toLocaleDateString('en-US', {
        ...options[format || 'long'],
        timeZone: 'UTC',
    }).split(" ")[1]

    const startTime = time.split(", ")[1]
    const endTime = time.split(", ")[2]

    return ({
        "month": month,
        "day": day,
        "startTime": startTime,
        "endTime": endTime
    })
}

export default convertDateAndTime
