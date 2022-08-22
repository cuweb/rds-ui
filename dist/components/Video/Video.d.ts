import React from 'react';
export interface VideoProps {
    title: string;
    video: VideoItemProps;
}
export interface VideoItemProps {
    width: string;
    height: string;
    src: string;
    frameBorder?: number;
    fullScreen?: boolean;
}
declare const Video: React.FC<VideoProps>;
export default Video;
