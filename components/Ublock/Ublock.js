const Ublock = (props) => {
    const { heading, children, color, full } = props
    const backgroundColor = color ? color : 'white'
    const width = full ? `u-block--full` : ''

    return (
        <div className={`u-block u-block--${backgroundColor} ${width}`}>
            {heading && (
                <h2
                    className={`c-heading`}
                    dangerouslySetInnerHTML={{ __html: heading }}
                />
            )}
            {children}
        </div>
    )
}
export default Ublock
