import { UblockProps } from '@components/Ublock/Ublock';
import React from 'react';
interface TimelineProps {
    title?: string;
    description?: string;
    stepFirst: string;
    stepLast: string;
    allSteps: {
        title: string;
        description: string;
    }[];
    block?: UblockProps;
}
declare const Timeline: React.FC<TimelineProps>;
export default Timeline;
