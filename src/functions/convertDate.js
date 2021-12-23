const convertData = (time) => {
    const event = new Date(`${time}T00:00:00`)
    const options = { weekday: 'long', month: 'long', day: 'numeric' }
    return event.toLocaleDateString('en-US', options)
}

export default convertData
