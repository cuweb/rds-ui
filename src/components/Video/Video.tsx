import React from 'react'

export interface VideoProps {
    id: string
    frame: VideoItemProps
}

export interface VideoItemProps {
    width: string
    height: string
    src: string
    frameBorder: string
}

const Video: React.FC<VideoProps> = ({ id, frame }): JSX.Element => {
    return (
        <div className="c-video">
            <iframe title={id} width={frame.width} height={frame.height} src={frame.src} frameBorder={frame.frameBorder} allowFullScreen />
        </div>
    )
}

export default Video