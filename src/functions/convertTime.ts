export const convertTime = (time: string, format?: string) => {
    const options: any = {
        default: {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
        },
        timeZone: 'UTC',
    }
    const timeOptions = format ? options[format] : options.default
    return new Date(time).toLocaleTimeString('en-US', timeOptions)
}

export default convertTime
