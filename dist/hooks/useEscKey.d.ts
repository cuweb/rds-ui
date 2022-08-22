import { RefObject } from 'react';
declare type Event = KeyboardEvent;
declare type RefType = RefObject<HTMLElement>;
declare type HandlerType = (event: Event) => void;
declare const useEscToClose: (ref: RefType, handler: HandlerType) => void;
export default useEscToClose;
