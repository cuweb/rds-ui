const convertData = (time) => {
    const event = new Date(time)
    const options = { weekday: 'long', month: 'long', day: 'numeric' }
    return event.toLocaleDateString('en-US', options)
}

export default convertData
