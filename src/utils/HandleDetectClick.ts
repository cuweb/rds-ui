/**
 * @name handleDetectOutsideClick
 * @desc checks if the current click event is outside the scope of your Ref
 * @param {object} IDetectClick IDetectClick interface
 * @returns removeListener function
 */

export interface IDetectClick {
    ref: React.RefObject<HTMLLIElement> | React.RefObject<HTMLButtonElement>
    setHasClickedOutsideTarget: React.Dispatch<React.SetStateAction<boolean>>
    setDropdownIsActive: React.Dispatch<React.SetStateAction<boolean>>
}

/**
 * @name handleClickInside
 * @desc sets boolean state whether the last click was on or away from ref object
 * @param {function} setHasClickedOutsideTarget
 * @returns void - react set state event
 */

export const handleClickInside = (
    setHasClickedOutsideTarget: React.Dispatch<React.SetStateAction<boolean>>
): void => {
    setHasClickedOutsideTarget(false)
}

/**
 * @name handleClickOutside
 * @desc checks the current click agains ref
 * @param {MouseEvent} e current mouse event
 * @param {object} args IDetectClick interface
 * @returns void - sets react state
 */

const handleClickOutside = (e: MouseEvent, args: IDetectClick): void => {
    if (args.ref.current && !args.ref.current.contains(e.target as Node)) {
        args.setHasClickedOutsideTarget(true)
        args.setDropdownIsActive(false)
    }
}

export function handleDetectOutsideClick(args: IDetectClick): Function {
    document.addEventListener('mousedown', (e: MouseEvent) =>
        handleClickOutside(e, args)
    )
    return () =>
        document.removeEventListener('mousedown', (e: MouseEvent) =>
            handleClickOutside(e, args)
        )
}
