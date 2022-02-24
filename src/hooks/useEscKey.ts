import { useEffect, RefObject } from 'react'

type Event = KeyboardEvent
type RefType = RefObject<HTMLElement>
type HandlerType = (event: Event) => void

const useEscToClose = (ref: RefType, handler: HandlerType) => {
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
