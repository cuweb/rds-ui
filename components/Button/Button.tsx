// import { useButton } from '@react-aria/button'
import { useRef } from 'react'
import Icon from '@components/Icon/Icon'

const Button = (props) => {
    const {
        ghost,
        text = 'Click',
        link = '#',
        icon,
        full,
        children,
        target,
    } = props
    const isGhost = ghost ? 'c-buttoncta--ghost' : ''
    const isFull = full ? 'c-buttoncta--full' : ''
    const hasIcon = icon ? 'u-icon' : ''

    const ref = useRef()
    // const { linkButtons } = useButton(props, ref)

    return (
        <a
            // {...linkButtons}
            ref={ref}
            className={`c-buttoncta ${hasIcon} ${isFull} ${isGhost}`}
            target={`_${target}`}
            href={link}
        >
            {icon && <Icon icon={icon} />}
            {children}
            {text}
        </a>
    )
}
export default Button