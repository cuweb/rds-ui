// @see https://www.cluemediator.com/detect-click-outside-a-react-component-using-react-hooks

import { useState, useRef, useEffect } from 'react'

function useVisible(initialIsVisible, button) {
    const [isVisible, setIsVisible] = useState(initialIsVisible)
    const ref = useRef(null)

    // Click Outside
    const handleClickOutside = (event) => {
        const elementClassName =
            event.target.classList.length > 0
                ? event.target.classList
                : event.target.parentElement.classList
        const isButton = elementClassName.toString().includes(button)
        const isCurrent = ref.current
        const hasTarget = isCurrent && isCurrent.contains(event.target)

        if (!isButton && isCurrent && !hasTarget) {
            setIsVisible(false)
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true)
        return () => {
            document.removeEventListener('click', handleClickOutside, true)
        }
    }, [])

    // Esc pressed
    const handleEsc = (event) => {
        if (event.keyCode === 27) {
            setIsVisible(false)
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleEsc, false)
        return () => {
            document.removeEventListener('keydown', handleEsc, false)
        }
    }, [])

    return { ref, isVisible, setIsVisible }
}

export default useVisible
