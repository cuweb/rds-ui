import React, { useState } from 'react'
import Overlay from './Overlay'
import Banner from '../../blocks/Banner/Banner'

export default {
    component: Overlay,
    title: 'Main Concepts/Overlay',
}

export const Search = (args) => {
    const [isHidden, setIsHidden] = useState(true)
    return (
        <div>
            <button
                className='c-buttoncta'
                onClick={(e) => setIsHidden(!isHidden)}
            >
                Open Dialog
            </button>
            <Overlay isHidden={isHidden}>
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
