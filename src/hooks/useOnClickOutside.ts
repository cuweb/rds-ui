// @see https://hashnode.com/post/useonclickoutside-custom-hook-to-detect-the-mouse-click-on-outside-typescript-ckrejmy3h0k5r91s18iu42t28

import { useEffect, RefObject } from 'react'

type Event = MouseEvent | TouchEvent
type RefType = RefObject<HTMLElement>
type HandlerType = (event: Event) => void

const useOnClickOutside = (ref: RefType, handler: HandlerType) => {
    useEffect(() => {
        const listener = (event: Event) => {
            const el = ref?.current
            if (!el || el.contains((event?.target as Node) || null)) {
                return
            }

            handler(event)
        }

        document.addEventListener('mousedown', listener)
        document.addEventListener('touchstart', listener)

        return () => {
            document.removeEventListener('mousedown', listener)
            document.removeEventListener('touchstart', listener)
        }
    }, [ref, handler])
}

export default useOnClickOutside
