import { useEffect, RefObject } from 'react'

type Event = KeyboardEvent

const useEscToClose = <T extends HTMLElement = HTMLElement>(
    ref: RefObject<T>,
    handler: (event: Event) => void
) => {
    useEffect(() => {
        const listener = (event: Event) => {
            if (event.key === 'Escape') {
                handler(event)
            }
        }

        document.addEventListener('keydown', (e) => listener(e))
        document.addEventListener('keyup', (e) => listener(e))

        return () => {
            document.removeEventListener('keydown', (e) => listener(e))
            document.removeEventListener('keyup', (e) => listener(e))
        }
    }, [ref, handler])
}

export default useEscToClose
