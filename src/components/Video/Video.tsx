import React from 'react'

export interface VideoProps {
    title: string
    video: VideoItemProps
}

export interface VideoItemProps {
    width: string
    height: string
    src: string
    frameBorder?: number
    fullScreen?: boolean
}

const Video: React.FC<VideoProps> = ({ title, video }): JSX.Element => {
    return (
        <div className='c-video'>
            <iframe
                title={title}
                width={video.width}
                height={video.height}
                src={video.src}
                frameBorder={video.frameBorder || 0}
                allowFullScreen={video.fullScreen || true}
            />
        </div>
    )
}

export default Video
