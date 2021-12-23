import React, { useState } from 'react'
import Overlay from './Overlay'
import Banner from '../../blocks/Banner/Banner'

export default {
    component: Overlay,
    title: 'Main Concepts/Layouts/Overlay',
}

export const Default = () => {
    const [isHidden, setIsHidden] = useState(true)
    return (
        <div className='example'>
            <button
                className='c-buttoncta'
                onClick={(e) => setIsHidden(!isHidden)}
            >
                Open Dialog
            </button>
            <Overlay
                isHidden={isHidden}
                type='banner'
                className='custom__class'
            >
                <Banner title='Banner Dialog'>
                    <button
                        className='c-buttoncta'
                        onClick={(e) => setIsHidden(!isHidden)}
                    >
                        Close Dialog
                    </button>
                </Banner>
            </Overlay>
        </div>
    )
}
