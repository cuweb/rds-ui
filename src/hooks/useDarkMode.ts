// @see https://usehooks.com/useDarkMode/
import { useEffect } from 'react'
import useLocalStorage from './useLocalStorage'
import useMedia from './useMedia'

function usePrefersDarkMode() {
    return useMedia<boolean>(['(prefers-color-scheme: dark)'], [true], false)
}

function useDarkMode() {
    const [enabledState, setEnabledState] = useLocalStorage<boolean>(
        'raven-mode-enabled',
        false
    )

    const prefersDarkMode = usePrefersDarkMode()
    const enabled = enabledState ?? prefersDarkMode
    useEffect(() => {
        const className = 'raven-mode'
        const element = window.document.body
        if (enabled) {
            element.classList.add(className)
        } else {
            element.classList.remove(className)
        }
    }, [enabled])
    return [enabled, setEnabledState]
}

export default useDarkMode
