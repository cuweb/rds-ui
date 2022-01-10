import React from 'react'
import Ublock from '@src/components/Ublock/Ublock'
import ButtonCTA from '@src/components/ButtonCTA/ButtonCTA'

export interface CardGridProps {
    title?: string
    columns?: 1 | 2 | 3 | 4 | undefined
    button?: ButtonProps
    color: 'grey' | 'white' | 'black' | undefined
    handleLoad?: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void
}

interface ButtonProps {
    url: string
    text: string
}

const CardGrid: React.FC<CardGridProps> = ({
    title,
    button,
    columns = 3,
    color,
    children,
    handleLoad,
}): JSX.Element => {
    return (
        <Ublock color={color || 'white'}>
            {title && <h2 dangerouslySetInnerHTML={{ __html: title }} />}
            <div className={`b-cardgrid u-grid u-grid--${columns}`}>
                {children}
            </div>
            {button && (
                <ButtonCTA text={button.text} link={button.url} center />
            )}
            {handleLoad && (
                <button
                    type='button'
                    className='c-buttoncta c-buttoncta--center'
                    onClick={(e: never) => handleLoad(e)}
                >
                    Load more
                </button>
            )}
        </Ublock>
    )
}

export default CardGrid
