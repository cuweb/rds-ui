import React from 'react';
export interface AccordionProps {
    type?: 'base' | 'single' | undefined;
    data: AccordionItemProps[];
}
export interface AccordionItemProps {
    id: string;
    title: string;
    content: string;
}
declare const Accordion: React.FC<AccordionProps>;
export default Accordion;
