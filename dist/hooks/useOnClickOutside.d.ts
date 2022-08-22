import { RefObject } from 'react';
declare type Event = MouseEvent | TouchEvent;
declare type RefType = RefObject<HTMLElement>;
declare type HandlerType = (event: Event) => void;
declare const useOnClickOutside: (ref: RefType, handler: HandlerType) => void;
export default useOnClickOutside;
